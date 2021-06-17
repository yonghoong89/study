'use strict';

import Popup from './popup.js'
import Field from './field.js'
import  * as sound from './sound.js'

const playButton = document.querySelector('.button__play');
const stopButton = document.querySelector('.button__stop');

let timerNumber = 10;
let playState = false;
const timerElement = document.querySelector('.box__timer .text__number');
const carrotElement = document.querySelector('.box__target-number');

const gameFinishLayer = new Popup();
gameFinishLayer.setClickListener((e)=>{
    replay(e);
});

let carrotNumber = 10;
let bugNumber = 7;
const gameField = new Field(carrotNumber,bugNumber);
gameField.setClickListener(onItemClick)

const onTimer = () =>{
    timerElement.innerText = timerNumber
    if(playState){
        setTimeout(()=>{
            timerNumber = timerNumber-1
            timerElement.innerText = timerNumber
            if(timerNumber>0){
                onTimer()
            }else{
                sound.stopBg()
                gameFinishLayer.showWithText('fail')
            }
        },1000)
    }
}

const carrotLength = () =>{
    carrotNumber = carrotNumber-1
    carrotElement.innerText = carrotNumber;
    if(carrotNumber===0){
        gameFinishLayer.showWithText('success')
        sound.playWin();
    }
}

const stopTimer = () =>{
    playState = false;
}

const toggleButton = (changeButtonType) =>{
    if(changeButtonType === 'stopButton'){
        playButton.classList.remove('button__play--active')
        stopButton.classList.add('button__stop--active')
    }
    if(changeButtonType === 'playButton'){
        stopButton.classList.remove('button__stop--active')
        playButton.classList.add('button__play--active')
    }
}

function replay (){
    playState = true;
    timerNumber = 10;
    carrotNumber = 10;
    bugNumber = 7;
    sound.playBg()
    onTimer();
    toggleButton('stopButton');
    gameField.init()
    carrotElement.innerText = timerNumber;
}

playButton.addEventListener('click', (e)=>{
    playState = true;
    onTimer();
    toggleButton('stopButton');
    sound.playBg()
    gameField.init()
    carrotElement.innerText = timerNumber;
});

stopButton.addEventListener('click', (e)=>{
    //게임실패
    stopTimer();
    sound.stopBg()
    sound.playAlert()
    toggleButton('playButton');
    gameFinishLayer.showWithText('replay')
    
});

function onItemClick(){
    const id = event.target.dataset.id;
    
    if(id === 'bug'){
        sound.playBug()
        gameFinishLayer.showWithText('fail')
        stopTimer();
        sound.stopBg()
    }else{
        if(id){
            sound.playCarrot()
            const delElement = document.querySelector(`.button__carrot[data-button-id="${id}"]`);
            delElement.remove();
            carrotLength();
        }
    }
}