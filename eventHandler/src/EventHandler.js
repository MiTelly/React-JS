import React, { Component } from 'react';

class EvHandler extends Component {
  constructor(){
    super();
    this.state = {value: ''};
    this.handleType = this.handleType.bind(this);
  }
  handleType(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div id="container">
        <label id="label">Type some text...</label>
        <input id="textArea" onChange={this.handleType} value={this.state.value} />
        <div id="inputArea">
          {this.state.value}
        </div>
      </div>
    );
  }
}

export default EvHandler;
