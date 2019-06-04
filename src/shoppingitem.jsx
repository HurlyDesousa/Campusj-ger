import React from 'react';
import Button from './button';

class Item extends React.Component {

render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.price}</td>
        <td><Button onClick={() => this.props.removeItem(this.props.name)} name="X"/></td>
      </tr>
    );
  }

}
export default Item;
