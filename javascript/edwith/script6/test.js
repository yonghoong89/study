window.addEventListener("load", function(){
    //console.log("window Loaded")//안쓰는코드
});

document.addEventListener("DOMContentLoaded", function(){
    //console.log("dom Loaded")
    print();
    print2();
    print3();
    print4();
    print5();
    print6();
});
var div1 = document.querySelector(".div1")
var div2 = document.querySelector(".div2")
var div3 = document.querySelector(".div3")
var div4 = document.querySelector(".div4")
var div5 = document.querySelector(".div5")
var div6 = document.querySelector(".div6")

var data = [{title : "title1",content : "content1", price : 100},
{title : "title2",content : "content2", price : 200},
{title : "title3",content : "content3", price : 300}];

var data2 = [1,2,3,4]

console.log(data2.map(x*2))


//javascript에서 변수불러오기
console.log("변수 불러오기")

//for each문 과for문의차이   
//for문
function print(){
    var newdata = [];
    for(var i=0,data_len=data.length; i<data_len; i++ ){
        newdata.push(data[i].price)
    }
    div1.innerHTML = newdata
}
//for each
function print2(){
    var newdata = [];
    data.forEach(function(v){
        newdata.push(v.price)
    });
    div2.innerHTML = newdata
}

//map메서드는 함수에서 정의한 방법대로 모든 원소를 가공해서 새로운 배열을 반환
function print3(){
    var newdata = data.map(function(v){
        return v.price * 2;
    });
    div3.innerHTML = newdata
}
// map + arrow
function print4(){
    var newdata = data.map(v => v.price * 2)
    div4.innerHTML = newdata
}

// filter * map과는 다르게 모든 데이터를 반환
function print5(){
    var newdata = data.filter(function(v){
        return v.price >= 200
    });
    console.table(newdata)

    //변환된값을푸시
    var newdata2 = [];
    newdata.forEach(function(v){
        newdata2.push(v.price)
    });

    div5.innerHTML = newdata2
}

// filter + map
function print6(){
    var newdata = data.filter(function(v){
        return v.price >= 200
    }).map(function(v){
        var obj = {title : v.title,content:v.content,price:v.price*2}
        return obj
    });
    console.table(newdata)

    //변환된값을푸시
    var newdata2 = [];
    newdata.forEach(function(v){
        newdata2.push(v.price)
    });

    div6.innerHTML = newdata2
}

//reduce
//filter
// var newData2 = data.filter(function(v){
//     return v.price > 5000;
// }).map(function(v){
//     var obj = {title : v.title, content : v.content, price : v.price+""};
//     return obj;
// });


//reduce 추가공부
