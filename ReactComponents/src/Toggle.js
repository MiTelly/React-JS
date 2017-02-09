import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1,
                  movement: 50 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({counter:this.state.counter+1,
                  movement:this.state.movement+this.props.step});
  }
  render() {
    let styles = {
      left: this.state.movement + "px"
    }

    return (
      <div id="toggle" style={styles}>
        <label id="toggleLabel">Click me!</label>
        <button id="clickButton" onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    );
  }
}

export default Toggle;
