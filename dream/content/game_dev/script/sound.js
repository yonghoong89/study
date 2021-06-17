'use strict';
//audio
const audioBg = new Audio('./sound/bg.mp3');
const audioBug = new Audio('./sound/bug_pull.mp3');
const audioCarrot = new Audio('./sound/carrot_pull.mp3');
const audioWin = new Audio('./sound/game_win.mp3');
const audioAlert = new Audio('./sound/alert.wav');

export function playBg(){
    playSound(audioBg)
}
export function stopBg(){
    stopSound(audioBg)
}
export function playBug(){
    playSound(audioBug)
}
export function playCarrot(){
    playSound(audioCarrot)
}
export function playWin(){
    playSound(audioWin)
}
export function playAlert(){
    playSound(audioAlert)
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound){
    sound.pause();
}