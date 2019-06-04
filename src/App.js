import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './shoppingitem';
import Button from './button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {itemsArray:[{name: "Apple", quantity: 1, price: "50"}]};
  }

  addNewItem() {
  console.log('New item added!');
  this.setState((state, props)=> {
    return {itemsArray:[...state.itemsArray, {name: "Pear", quantity: 1,  price: "30"}]}
  })
  }

  removeItem(currentname) {
    console.log('An item removed!');
    this.setState((state, props)=> {
      return {itemsArray:[...state.itemsArray.filter(
        (item)=>{ return item.name !== currentname;
        })
      ]}
    })
  }

  total(items) {
    var allitems = 0;
    for (
      var i = 0; i < this.state.itemsArray.length; i++) {
      allitems = allitems + this.state.itemsArray[i].quantity;
    }
    return allitems;
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Shopping Cart</p>
      </header>
      <table class="maintable">
      <tr>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Remove</th>
      </tr>
      {this.state.itemsArray.map((item)=>{
        return (
          <Item name={item.name} quantity={item.quantity} price={item.price} removeItem={this.removeItem.bind(this)}/>
        );
      })}
      <tr>
        <td></td>
        <td>Total {this.total(this.state.itemsArray)}</td>
        <td></td>
        <td></td>
      </tr>
      </table>
      <Button onClick={this.addNewItem.bind(this)} name="Add Item"/>

    </div>


  );
}
}


export default App;
