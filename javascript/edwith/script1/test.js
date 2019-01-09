window.addEventListener("load", function(){
    console.log("window Loaded")//안쓰는코드
});

document.addEventListener("DOMContentLoaded", function(){
    console.log("dom Loaded")
    //ajax();
});

function ajax() {
    var oReq = new XMLHttpRequest();
     
   oReq.addEventListener("load", function() {
       var jsonobj = JSON.parse(this.responseText);
       console.log(jsonobj);
       var fruit = jsonobj.favorites[1];
       var outside = document.querySelector(".outside")
       outside.innerHTML += "<span>"+fruit+"</span>"
   });
     
    oReq.open("GET", "json.txt");
    oReq.send();
 }

 function animation(){
    var count = 0;
    var el=document.querySelector(".outside");
    el.style.marginLeft = "0px";
    function run() {

    if(count > 70) return;
        count = count + 1;
        el.style.marginLeft =  parseInt(el.style.marginLeft) + count + "px";
        requestAnimationFrame(run);
    }
    requestAnimationFrame(run)
 }
