import React, { PureComponent } from 'react';
import React from 'react';

class CartAddItemForm extends PureComponent {
    inputRef = React.createRef();

    onSubmit = event =>{
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
    }
    render() {
        return (
            <div className="box__cart-add-item">
                <form className="box__form" onSubmit={this.onSubmit}>
                    <input type="text" ref={this.inputRef} className="form__item-text" placeholder="추가상품 입력" />
                    <button type="submit" className="button__add">Add</button>
                </form>
            </div>
        );
    }
}

export default CartAddItemForm;