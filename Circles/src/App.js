import React, { Component } from 'react';
import './App.css';
import Circles from './Circles.js'

class App extends Component {
  
  createCircles() {
    let arr1 = [];

    for (let i=0; i<18; i++) {
      var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
        (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

      arr1.push(<Circles key={i+randomColor} bgColor={randomColor} />);
    }
    return arr1;
  }

  render() {
    let containerStyle = {
      padding: 50,
      margin: 0
    }
    return (
      <div style={containerStyle}>
        {this.createCircles()}
      </div>
    );
  }
}

export default App;
