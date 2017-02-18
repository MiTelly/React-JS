import React, { Component } from 'react';

class Circles extends Component {
  render() {
    let circleStyle = {
      backgroundColor: this.props.bgColor,
      width: 150,
      height: 150,
      borderRadius: 100,
      display: 'inline-block',
      margin: 30
    }
    return (
      <div style={circleStyle}>
      </div>
    );
  }
}

export default Circles;
