'use strict';

import Popup from './popup.js'
import GameBuilder from './game.js'

const gameFinishLayer = new Popup();
const game = new GameBuilder()
.timerNumber(10)
.carrotNumber(10)
.bugNumber(7)
.build();

game.setGameStopListener(reason =>{
    gameFinishLayer.showWithText(reason)
});

gameFinishLayer.setClickListener((e)=>{
    game.replay();
});