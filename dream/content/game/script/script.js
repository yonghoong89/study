const playBUtton = document.querySelector('.button__play');
const stopBUtton = document.querySelector('.button__stop');


const onTimer = () =>{
    const timer = document.querySelector('.box__timer .text__number');
    let timerNumber = 10

    const timerFunc = () => {
        setTimeout(()=>{
            timerNumber--
            timer.innerText = timerNumber
        },1000)
    } 
    
    
    timerFunc();
    console.log('test')
}


playBUtton.addEventListener('click', (e)=>{
    onTimer();
});