import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js'
import Toggle from './Toggle.js'

class App extends Component {

  render() {
    return (
      <div>
          <Clock />
          <Toggle step={20}/>
          <Toggle step={200}/>
      </div>
    );
  }
}

export default App;
