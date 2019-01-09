window.addEventListener("load", function(){
    console.log("window Loaded")//안쓰는코드
});

document.addEventListener("DOMContentLoaded", function(){
    console.log("dom Loaded")
    eventclick();
});

function eventclick() {
    // var data = {
    //     title : "hello",
    //     content: "lorem dkdkdkdk",
    //     price : 2000
    // };

    var data = {  title : "hello",
              content : "lorem dkfief",
              price : 2000
           };
    
           var html = "<li><h4>{title}</h4><p>{content}</p><div>{price}</div></li>";

   var resultHtml = html.replace("{title}", data.title)
   .replace("{content}", data.content)
   .replace("{price}", data.price);
   
   console.log(resultHtml)
 }
