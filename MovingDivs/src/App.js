import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {left:0, movement: 0,increment: 50};
  }
  componentDidMount() {
    this.timerID = setInterval( () => this.move(), 500);
  }
  move() {
    this.setState({movement:this.state.movement+this.state.increment});

    if (this.state.movement >= 450) {
      this.setState({increment: -50});
    }
    if (this.state.movement <= 0) {
      this.setState({increment: 50});
    }

  }
  render() {
    let styles = {
      left: this.state.movement + "px"
    }
    return (
      <div id="outerDiv">
        <div className="innerDiv" id="blue" style={styles}>
        </div>
        <div className="innerDiv" id="red" style={styles}>
        </div>
      </div>
    );
  }
}

export default App;
