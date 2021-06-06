const playButton = document.querySelector('.button__play');
const stopButton = document.querySelector('.button__stop');
const carrotButton = document.querySelector('.button__carrot');
const bugButton = document.querySelector('.button__bug');

const targetBox = document.querySelector('.box__target');
const replayButton = document.querySelector('.button__replay');

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

const toggleButton = (e) =>{
    if(e.target === playButton){
        playButton.classList.remove('button__play--active')
        stopButton.classList.add('button__stop--active')
    }
    if(e.target === stopButton){
        stopButton.classList.remove('button__stop--active')
        playButton.classList.add('button__play--active')
    }
}

const createCarrot = () =>{
    const carrotButtonMaxnumber = carrotNumber;
    for(let i=1; i<=carrotButtonMaxnumber;i++ ){
        const carrotButton = document.createElement("button");
        carrotButton.setAttribute('class','button__target button__carrot')
        carrotButton.setAttribute('data-button-id',`carrot${i}`)
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
        bugButton.setAttribute('class','button__target button__bug');
        bugButton.innerHTML = `
            <img src="img/bug.png" alt="벌레" data-id="bug">
        `
        targetBox.appendChild(bugButton);
    }
}

const layerOpen = (layerClass) =>{
    const openLayer = document.querySelector(`.box__${layerClass}`)
    openLayer.classList.add('box__layer--active');
    //게임실패
    stopTimer();
    audioBg.pause();
}

const replay = () =>{
    console.log('test')
    timerNumber = 10;
    onTimer();
}

playButton.addEventListener('click', (e)=>{
    playState = true;
    onTimer();
    toggleButton(e);
    audioBg.play()
    createCarrot();
    createBug();
    carrotElement.innerText = timerNumber;
});

stopButton.addEventListener('click', (e)=>{
    //게임실패
    stopTimer();
    audioBg.pause();
    toggleButton(e);
    layerOpen('replay')
    audioAlert.play()
});

replayButton.addEventListener('click', (e)=>{
    //리플레이
    replay()
});

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