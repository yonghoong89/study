'use strict';
import {Field, itemType} from './field.js'
import * as sound from './sound.js'

export const Reason = Object.freeze({
    sucess : 'sucess',
    fail : 'fail',
    replay : 'replay'
});

//빌터 패턴
export default class GameBuilder{
    timerNumber(number){
        this.timerNumber = number;
        return this;
    }
    carrotNumber(number){
        this.carrotNumber = number;
        return this;
    }
    bugNumber(number){
        this.bugNumber = number;
        return this;
    }

    build(){
        return new Game(
            this.timerNumber,
            this.carrotNumber,
            this.bugNumber
        );
    }
}

class Game {
    constructor(timerNumber, carrotNumber, bugNumber){
        this.timerNumberInit = timerNumber;
        this.carrotNumberInit = carrotNumber;
        this.bugNumberInit = bugNumber;

        this.timerNumber = timerNumber;
        this.carrotNumber = carrotNumber;
        this.bugNumber = bugNumber;

        this.timerElement = document.querySelector('.box__timer .text__number');
        this.carrotElement = document.querySelector('.box__target-number');
        this.playButton = document.querySelector('.button__play');
        this.stopButton = document.querySelector('.button__stop');
        this.playState = false;

        this.gameField = new Field(carrotNumber,bugNumber);
        this.gameField.setClickListener(this.onItemClick);

        this.playButton.addEventListener('click', (e)=>{
            this.playState = true;
            this.onTimer();
            this.toggleButton('stopButton');
            sound.playBg()
            this.gameField.init()
            this.carrotElement.innerText = this.timerNumber;
        });

        this.stopButton.addEventListener('click', (e)=>{
            //게임실패
            this.stopTimer();
            sound.stopBg()
            sound.playAlert()
            this.toggleButton('playButton');
            this.onGameStop && this.onGameStop(Reason.replay);
        });
    }
    
    //타켓 클릭
    onItemClick = () =>{
        const id = event.target.dataset.id;

        if(id === itemType.bug){
            sound.playBug()
            sound.stopBg()
            this.stopTimer();
            this.onGameStop && this.onGameStop(Reason.fail);
        }else{
            if(id){
                sound.playCarrot()
                const delElement = document.querySelector(`.button__carrot[data-button-id="${id}"]`);
                delElement.remove();
                this.carrotLength();
            }
        }
    }

    //타이머
    onTimer = () =>{
        this.timerElement.innerText = this.timerNumber
        if(this.playState){
            setTimeout(()=>{
                this.timerNumber = this.timerNumber-1
                this.timerElement.innerText = this.timerNumber
                if(this.timerNumber>0){
                    this.onTimer()
                }else{
                    sound.stopBg()
                    this.onGameStop && this.onGameStop(Reason.fail);
                }
            },1000)
        }
    }

    stopTimer () {
        this.playState = false;
    }

    toggleButton (changeButtonType) {
        if(changeButtonType === 'stopButton'){
            this.playButton.classList.remove('button__play--active')
            this.stopButton.classList.add('button__stop--active')
        }
        if(changeButtonType === 'playButton'){
            this.stopButton.classList.remove('button__stop--active')
            this.playButton.classList.add('button__play--active')
        }
    }

    replay (){
        this.timerNumber = this.timerNumberInit;
        this.carrotNumber = this.carrotNumberInit;
        this.bugNumber = this.bugNumberInit;
        this.playState = true;
        sound.playBg()
        this.onTimer();
        this.toggleButton('stopButton');
        this.gameField.init()
        this.carrotElement.innerText = this.timerNumber;
    }

    carrotLength (){
        this.carrotNumber = this.carrotNumber-1
        this.carrotElement.innerText = this.carrotNumber;
        if(this.carrotNumber===0){
            this.onGameStop && this.onGameStop(Reason.success);
            sound.playWin();
            sound.stopBg()
            this.stopTimer();
        }
    }

    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }
}