window.addEventListener("load", function(){
    console.log("window Loaded")//안쓰는코드
});

document.addEventListener("DOMContentLoaded", function(){
    console.log("dom Loaded")
    //eventclick();
    eventclick2();
});

function eventclick() {
    var log = document.querySelector(".log");
    var li = document.querySelectorAll("ul>li");

   for(var i=0,len=li.length; i<len; i++){
    li[i].addEventListener("click",function(evt){
        console.log(evt.currentTarget);
        //공백이없는경우
        //log.innerHTML = "target is " +  evt.currentTarget.firstChild.src;
        log.innerHTML = "target is " +  evt.currentTarget.firstElementChild.src;
    });
   }
 }

 function eventclick2() {
    var log = document.querySelector(".log");
    var ul = document.querySelector("ul");

    ul.addEventListener("click",function(evt){
        var vlue = evt.target;
        if(vlue.tagName === "IMG"){
            log.innerHTML = "target is " + vlue.src
        }else if(vlue.tagName === "LI"){
            log.innerHTML = "target is " + vlue.firstElementChild.src
        }
    });
 }
