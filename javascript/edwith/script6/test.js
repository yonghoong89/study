window.addEventListener("load", function(){
    //console.log("window Loaded")//안쓰는코드
});

document.addEventListener("DOMContentLoaded", function(){
    //console.log("dom Loaded")
    print2();
});
var data = [{title : "hello",content : "간지철철", price : 12000},
{title : "crong",content : "괜춘한 상품", price : 5500},
{title : "codesquad",content : "쩌는상품", price : 1200}];



//for each문 과for문의차이   
data.forEach(print);
function print(v){
    console.log("foreach")
    console.log(v.title,v.price)
}

function print2(){
    for(var i=0,data_len=data.length; i<data_len; i++ ){
        console.log("for")
        console.log(data[i].title,data[i].price)
    }
}


//map메서드는 함수에서 정의한 방법대로 모든 원소를 가공해서 새로운 배열을 반환합니다.
var newData = data.map(function(v){
    var obj = {name: v.title, content: v.content, price: v.price*10};
    return obj;
});
console.log(data)
console.log(newData)

//filter
var newData2 = data.filter(function(v){
    return v.price > 5000;
}).map(function(v){
    var obj = {title : v.title, content : v.content, price : v.price+""};
    return obj;
});
console.log(data)
console.log(newData2)

//reduce 추가공부
