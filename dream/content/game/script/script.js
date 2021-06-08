const playButton = document.querySelector('.button__play');
const stopButton = document.querySelector('.button__stop');
const carrotButton = document.querySelector('.button__carrot');
const bugButton = document.querySelector('.button__bug');

const targetBox = document.querySelector('.box__target');
const replayButton = document.querySelectorAll('.button__replay');

//audio
const audioBg = document.querySelector('.audio__background');
const audioBug = document.querySelector('.audio__bug');
const audioCarrot = document.querySelector('.audio__carrot');
const audioWin = document.querySelector('.audio__win');
const audioAlert = document.querySelector('.audio__alert');

let timerNumber = 10;
let playState = false;
const timerElement = document.querySelector('.box__timer .text__number');
const carrotElement = document.querySelector('.box__target-number');

let carrotNumber = 10;
let bugNumber = 7;

const onTimer = () =>{
    timerElement.innerText = timerNumber
    if(playState){
        setTimeout(()=>{
            timerNumber = timerNumber-1
            timerElement.innerText = timerNumber
            if(timerNumber>0){
                onTimer()
            }else{
                layerOpen('fail')
            }
        },1000)
    }
}

const carrotLength = () =>{
    carrotNumber = carrotNumber-1
    carrotElement.innerText = carrotNumber;
    if(carrotNumber===0){
        layerOpen('success')
        audioWin.play();
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

const createCarrot = () =>{
    const carrotButtonMaxnumber = carrotNumber;

    for(let i=1; i<=carrotButtonMaxnumber;i++ ){
        const carrotButton = document.createElement("button");
        const randomPositionTop = (targetBox.clientHeight-80) * Math.random() + 'px';
        const randomPositionLeft = (targetBox.clientWidth-80) * Math.random() + 'px';

        carrotButton.setAttribute('class','button__target button__carrot')
        carrotButton.setAttribute('data-button-id',`carrot${i}`)
        carrotButton.style.top = randomPositionTop
        carrotButton.style.left = randomPositionLeft
        carrotButton.innerHTML = `
            <img src="img/carrot.png" alt="당근" data-id=carrot${i} >
        `
        targetBox.appendChild(carrotButton);
    }
}

const createBug = () =>{
    const bugButtonMaxnumber = bugNumber;
    for(let i=1; i<=bugButtonMaxnumber;i++ ){
        const bugButton = document.createElement("button");
        const randomPositionTop = (targetBox.clientHeight-80) * Math.random() + 'px';
        const randomPositionLeft = (targetBox.clientWidth-80) * Math.random() + 'px';

        bugButton.setAttribute('class','button__target button__bug');
        bugButton.innerHTML = `
            <img src="img/bug.png" alt="벌레" data-id="bug">
        `
        bugButton.style.top = randomPositionTop
        bugButton.style.left = randomPositionLeft
        targetBox.appendChild(bugButton);
    }
}

const layerOpen = (layerClass) =>{
    const openLayer = document.querySelector(`.box__${layerClass}`)
    openLayer.classList.add('box__layer--active');
    //게임실패
    stopTimer();
    audioBg.pause();
    audioBug.play();
}

const layerClosed = () =>{
    const openLayer = document.querySelector(`.box__layer--active`)
    openLayer.classList.remove('box__layer--active');
}

const replay = () =>{
    console.log('test')
    layerClosed();
    targetBox.innerHTML = '';
    playState = true;
    timerNumber = 10;
    carrotNumber = 10;
    bugNumber = 7;
    audioBg.play()
    onTimer();
    toggleButton('stopButton');
    createCarrot();
    createBug();
    carrotElement.innerText = timerNumber;
}

playButton.addEventListener('click', (e)=>{
    playState = true;
    onTimer();
    toggleButton('stopButton');
    audioBg.play()
    createCarrot();
    createBug();
    carrotElement.innerText = timerNumber;
});

stopButton.addEventListener('click', (e)=>{
    //게임실패
    stopTimer();
    audioBg.pause();
    toggleButton('playButton');
    layerOpen('replay')
    audioAlert.play()
});

for(let i = 0; i<replayButton.length; i++) {
    replayButton[i].addEventListener('click', (e)=>{
        replay()
    });
}



targetBox.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    
    if(id === 'bug'){
        audioBug.play()
        layerOpen('fail')
    }else{
        if(id){
            audioCarrot.play()
            const delElement = document.querySelector(`.button__carrot[data-button-id="${id}"]`);
            console.log(delElement)
            delElement.remove();
            carrotLength();
        }
    }
});