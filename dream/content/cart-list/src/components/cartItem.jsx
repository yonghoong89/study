import React, { Component } from 'react';

class CartItem extends Component {
    inputRef = React.createRef();

    handleIncrement = () =>{
        this.props.onIncrement(this.props.item)
    }
    handleDecrement = () =>{
        this.props.onDecrement(this.props.item)
    }
    handleChangeCount = () =>{
        const count = Number(this.inputRef.current.value)
        if(count){
            this.props.onChangeCount(this.props.item, count);
        }else{
            this.props.onChangeCount(this.props.item, '');
        }
    }
    handleDelete = () =>{
        this.props.onDelete(this.props.item)
    }
    handleEmptyCheck = ()=>{
        this.inputRef.current.value = Number(this.inputRef.current.value)
        if(this.inputRef.current.value === ''){
            alert('숫자를 입력해주세요')
            this.inputRef.current.focus();
        }
    }

    render() {
        const {name, count} = this.props.item;
        
        return (
            <li className="list-item">
                <div className="box__image"></div>
                <div className="box__information">
                    <div className="box__title">{name}</div>
                    <div className="box__item-count">
                        <input className="form__number" ref={this.inputRef} type="number" min="0" max="2" title="상품수량" onBlur={this.handleEmptyCheck} onChange={this.handleChangeCount} value={count}/>
                        <button type="button" className="sprite__cart button__increase" onClick={this.handleIncrement}>+</button>
                        <button type="button" className="sprite__cart button__decrease" onClick={this.handleDecrement}>-</button>
                    </div>
                    <button type="button" className="button__delete" onClick={this.handleDelete}>삭제</button>
                </div>
            </li>
        );
    }
}

export default CartItem;