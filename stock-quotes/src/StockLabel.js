import React, { Component } from 'react';

class StockLabel extends Component {

  render() {
    let divStyle = {
      backgroundColor: 'beige',
      width: 600,
      height: 100,
      fontSize: 45,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTop: '3px solid black',
      borderLeft: '3px solid black',
      borderBottom: '3px solid black'
    }
    return (
      <div style={divStyle}>
        Stock ticker => 'ABCD'
      </div>
    );
  }
}

export default StockLabel;
