const playBUtton = document.querySelector('.button__play');
const stopBUtton = document.querySelector('.button__stop');
const carrotButton = document.querySelector('.button__carrot');
const bugButton = document.querySelector('.button__bug');

//audio
const audioBg = document.querySelector('.audio__background');
const audioBug = document.querySelector('.audio__bug');
const audioCarrot = document.querySelector('.audio__carrot');
const audioWin = document.querySelector('.audio__win');
const audioAlert = document.querySelector('.audio__alert');

let timerNumber = 10;
let playState = false;
const timer = document.querySelector('.box__timer .text__number');

let carrotNumber = 10;
let bugNumber = 7;

const onTimer = () =>{
    if(playState){
        setTimeout(()=>{
            timerNumber = timerNumber-1
            timer.innerText = timerNumber
            if(timerNumber>0){
                onTimer()
            }else{
                console.log('타이머 끝')
            }
        },1000)
    }
}

const stopTimer = () =>{
    playState = false;
}

const toggleButton = (e) =>{
    if(e.target === playBUtton){
        playBUtton.classList.remove('button__play--active')
        stopBUtton.classList.add('button__stop--active')
    }
    if(e.target === stopBUtton){
        stopBUtton.classList.remove('button__stop--active')
        playBUtton.classList.add('button__play--active')
    }
}

playBUtton.addEventListener('click', (e)=>{
    playState = true;
    onTimer();
    toggleButton(e);
    audioBg.play()
});

stopBUtton.addEventListener('click', (e)=>{
    stopTimer();
    toggleButton(e);
    audioBg.pause();
});

carrotButton.addEventListener('click', (e)=>{
    audioCarrot.play();
});

bugButton.addEventListener('click', (e)=>{
    audioBug.play();
});