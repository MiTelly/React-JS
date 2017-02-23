import React, { Component } from 'react';

class Stock extends Component {

  render() {
    let divStyle = {
      backgroundColor: this.props.bgColor,
      width: 300,
      height: 100,
      fontSize: 45,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '3px solid black'
    }
    return (
      <div style={divStyle}>
        {this.props.price}
      </div>
    );
  }
}

export default Stock;
