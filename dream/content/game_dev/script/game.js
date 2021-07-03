'use strict';

export default class Game{
    constructor(carrotNumber,bugNumber){
        this.carrotNumber = carrotNumber
        this.bugNumber = bugNumber
        this.fieldBox = document.querySelector('.box__target');

        this.fieldBox.addEventListener('click' , () => {
            this.onClick && this.onClick();
        });
    }
    setClickListener(onClick){
        this.onClick = onClick;
    }
    init(){
        this.fieldBox.innerHTML = '';
        this._addItem('carrot')
        this._addItem('bug')
    }
    _addItem(addItemName){
        let itemName = '';
        let altText = '';
        let count = '';
        if(addItemName==='carrot'){
            itemName = 'carrot';
            altText = '당근';
            count = this.carrotNumber;
        }else if(addItemName==='bug'){
            itemName = 'bug';
            altText = '버그';
            count = this.bugNumber;
        }
        for(let i = 1; i <= count; i++ ){
            const targetButton = document.createElement("button");
            const randomPositionTop = (this.fieldBox.clientHeight-80) * Math.random() + 'px';
            const randomPositionLeft = (this.fieldBox.clientWidth-80) * Math.random() + 'px';
    
            targetButton.setAttribute('class',`button__target button__${itemName}`)
            targetButton.setAttribute('data-button-id',`${itemName}${i}`)
            targetButton.style.top = randomPositionTop
            targetButton.style.left = randomPositionLeft
            if(addItemName==='carrot'){
                targetButton.innerHTML = `
                    <img src="img/${itemName}.png" alt="${altText}" data-id=${itemName}${i}>
                `
            }else{
                targetButton.innerHTML = `
                    <img src="img/${itemName}.png" alt="${altText}" data-id=${itemName}>
                `
            }
            this.fieldBox.appendChild(targetButton);
        }
    }
}
