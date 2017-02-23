import React, { Component } from 'react';
import './App.css';
import Stock from './Stock.js';
import StockLabel from './StockLabel.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      price: 1000,
      bgColor: "beige"
    };
  }

  newPrice() {
    let randNum = Math.floor(Math.random() * 11) - 5;

    if (randNum > 0) {
      this.setState( {price: this.state.price + randNum, bgColor: "green"} );
    } else if (randNum < 0) {
      this.setState( {price: this.state.price + randNum, bgColor: "red"} );
    } else {
      this.setState( {price: this.state.price + randNum, bgColor: "beige"} );
    }
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.newPrice(), 2000);
  }

  render() {
    let appStyle = {
      display: 'flex',
      flexDirection: 'wrap'
    }
    return (
      <div style={appStyle}>
        <StockLabel />
        <Stock bgColor={this.state.bgColor} price={this.state.price}/>
      </div>
    );
  }
}

export default App;
