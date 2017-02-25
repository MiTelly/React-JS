import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {

    let linkStyle = {
      textDecoration: 'none',
      fontSize: 25,
      color: 'white'
    }
    let active = {
      color: 'green'
    }

    return (
      <div>
                
        <div className="App-header">
          <h1>SINGLE PAGE APP TEMPLATE</h1>
          <div className="Nav">
            <ul>
              <li><Link to='Home' style={linkStyle} activeStyle={active}>HOME</Link></li>
              <li><Link to='About' style={linkStyle} activeStyle={active}>ABOUT</Link></li>
              <li><Link to='Contact' style={linkStyle} activeStyle={active}>CONTACT</Link></li>
            </ul>
          </div>
        </div>

        <div className="Children">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
