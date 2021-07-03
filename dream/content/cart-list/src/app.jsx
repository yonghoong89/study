import './app.css';
import Header from './components/header';
import CartAddTtemForm from './components/cartAddItemForm';
import CartList from './components/cartList';

import React, { Component } from 'react';

class App extends Component {

  state = {
      items:[
          {name:'상품명1', count:0, id:1},
          {name:'상품명2', count:0, id:2},
          {name:'상품명3', count:0, id:3},
      ]
  }

  handleIncrement = (item) =>{
    //껍데기만 다를 뿐 스프레드신택스 복제 시 안에 레퍼런스 링크는 같음
    const items = [...this.state.items]
    const index = items.indexOf(item)
    items[index].count++;
    this.setState({items: items})
  }

  handleDecrement = (item) =>{
      console.log(item)
      const items = [...this.state.items]
      const index = items.indexOf(item)
      const count =  items[index].count-1;
      items[index].count = count < 0 ? 0 : count;
      this.setState({items: items})
  }
  handleChangeCount = (item, count) =>{
    const items = [...this.state.items]
    const index = items.indexOf(item)
    items[index].count = count;
    this.setState({items: items})
  }
  handleDelete = (item) =>{
      //현재 item의 아이디와 일치하지 않는것만 담음 (현재 선택된 아이템 외 담음)
      const items = this.state.items.filter(arrayitem => item.id !== arrayitem.id);
      this.setState({items: items})
  }
  handleAdd = (name) =>{
    const items = [...this.state.items,{name:name,count:0,id:Date.now()}]
    this.setState({items: items})
  }
  handleAallDelete = () =>{
    const items = this.state.items.map(item => {
      item.count = 0; 
      return item
    });
    this.setState({items: items})
  }

  render() {
    return (
      <div className="section__cart-list">
        <Header totalCount={this.state.items.filter(item => item.count > 0).length} />
        <CartAddTtemForm onAdd={this.handleAdd} />
        <CartList
        items={this.state.items}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onChangeCount={this.handleChangeCount}
        onDelete={this.handleDelete} />
        <button type="button" className="button__all-delete" onClick={this.handleAallDelete}>수량 초기화</button>
      </div>
    );
  }
}

export default App;
