window.addEventListener("load", function(){
    console.log("window Loaded")//안쓰는코드
});

document.addEventListener("DOMContentLoaded", function(){
    console.log("dom Loaded")
    replaceEvent();
});

function replaceEvent() {

    var html = document.querySelector("#html").innerHTML;
    var data =[
        {title:"hello1",content:"javascriptstudy1",price:"10000"},
        {title:"hello2",content:"javascriptstudy2",price:"20000"},
        {title:"hello3",content:"javascriptstudy2",price:"20000"}
    ]

    var result = "";

    for(var i = 0 ;i<data.length;i++){
        result += html.replace("{title}",data[i].title)
        .replace("{content}",data[i].content)
        .replace("{price}",data[i].price);
        console.log(data.length)
    }

    document.querySelector("ul").innerHTML = result
}
