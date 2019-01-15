window.addEventListener("load", function(){
    console.log("window Loaded")//안쓰는코드
});

document.addEventListener("DOMContentLoaded", function(){
    console.log("dom Loaded")
    tabMenuEvent();
});
function tabMenuEvent() {

    function makeTemplate(data, clickedId){
        var html = document.getElementById("tabcontent").innerHTML;
        var content = document.querySelector(".option_bx");
        var resultHTML = "";

        for(var i=0; i < data.length; i++){
            if(data[i].id === clickedId){
                resultHTML += html.replace("{title}",data[i].title)
                .replace("{price}",data[i].price)
                .replace("{small_title}",data[i].small_title)
                .replace("{small_price}",data[i].small_price)
                .replace("{info_data}",data[i].info_data)
                .replace("{info_call}",data[i].info_call)
                .replace("{info_message}",data[i].info_message);
                break;
            }
        }
        content.innerHTML = resultHTML
    }

    function sendAjax(url, clickedId){
        var oReq = new XMLHttpRequest();

        oReq.addEventListener("load", function() {
            var data = JSON.parse(oReq.responseText);
            makeTemplate(data, clickedId);
        });
        oReq.open("GET", url);
        oReq.send();
    }

    var tabElement = document.querySelector(".lst_cate");
    tabElement.addEventListener("click", function(evt){
        var lst_cate_li = document.querySelectorAll(".lst_cate li");
        var value = evt.target

        loadingEvent();

        console.log(lst_cate_li[0].classList)
        for(var i = 0; i<lst_cate_li.length; i++){
            if(lst_cate_li[i].contains('on')){
                console.log(1)
                lst_cate_li[i].classList.remove('on');
            }
        }

        if(value.tagName === "SPAN"){
            sendAjax("json.txt",value.parentNode.getAttribute('href').replace("#",""));
        }else if(value.tagName === "LI"){
            sendAjax("json.txt",value.children[0].getAttribute('href').replace("#",""));
        }else if(value.tagName === "A"){
            sendAjax("json.txt",value.getAttribute('href').replace("#",""));
        }

    });

    function loadingEvent(){
        var content = document.querySelector(".detail_cont");
        var loading_content = document.querySelector(".detail_cont+.detail_cont");

        content.style.display = "none"
        loading_content.style.display = "block"
        setTimeout(function(){
            content.style.display = "block"    
            loading_content.style.display = "none"
        }, 500);
    }
}
