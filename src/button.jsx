import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <button onClick={this.props.onClick} className="addbutton">{this.props.name}</button>
    );
  }
}




export default Button;
