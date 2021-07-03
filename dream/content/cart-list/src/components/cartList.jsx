import React, { Component } from 'react';
import CartItem from './cartItem';

class CartList extends Component {

    handleIncrement = (item) =>{
        this.props.onIncrement(item)
    }
    handleDecrement = (item) =>{
        this.props.onDecrement(item)
    }
    handleChangeCount = (item,count) =>{
        this.props.onChangeCount(item,count)
    }
    handleDelete = (item) =>{
        this.props.onDelete(item)
    }

    render() {
        return (
            <ul className="list__cart-item">
                {
                    this.props.items.map((item)=>
                        <CartItem 
                        item={item}
                        key={item.id}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onChangeCount={this.handleChangeCount}
                        onDelete={this.handleDelete}
                         />
                    )
                }
            </ul>
        );
    }
}

export default CartList;