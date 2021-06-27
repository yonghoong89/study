'use strict';

export default class Popup{
    constructor(){
        this.Popup = document.querySelector('.box__layer')
        this.PopupInner = this.Popup.querySelector('.box__inner')
        this.replayButton = this.Popup.querySelector('.button__replay');
        this.replayButton.addEventListener('click' , () => {
            this.onClick && this.onClick();
            this.hide();
        });
    }
    setClickListener(onClick){
        this.onClick = onClick;
    }
    
    hide(){
        this.Popup.classList.remove('box__layer--active');
        this.Popup.querySelector('.box__title').remove();
    }
    
    showWithText(reason){
        this.Popup.classList.add('box__layer--active');
        const titleTag = document.createElement("div");
        titleTag.setAttribute('class','box__title')
        const sucessText = '성공했어요!'
        const failText = '실패했어요!'

        if(reason ==='sucess'){
            titleTag.innerText = sucessText
        }else if(reason ==='fail'){
            titleTag.innerText = failText
        }
        this.PopupInner.appendChild(titleTag)
    }
}
