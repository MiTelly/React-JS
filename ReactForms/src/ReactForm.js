import React, { Component } from 'react';

class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      submitted: false,
      weather: 'raining'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   const target = event.target;

   if (target.name === 'userName') {
     let value = target.value;
     this.setState({
       userName: value
     });
   } else if (target.name === 'weather') {
     let weatherValue = target.value;
     this.setState({
       weather: weatherValue
     });
   }
  }

  handleSubmit(event) {
    this.setState({submitted: true});
    event.preventDefault();
  }

  render() {
    let textAreaStyle = {
      padding: 0,
      border: 2 + "blue",
      width: 300,
      height: 40,
      fontSize: 20,
    }
    let submitButtonStyle = {
      width: 100,
      height: 40,
      backgroundColor: "grey",
      fontSize: 20,
      marginTop: 10,
      borderRadius: 5
    }
    let formStyle = {
      marginLeft: 15
    }
    let selectStyle = {
      height: 40,
      width: 130,
      fontSize: 20
    }

    if (!this.state.submitted) {
      return (
        <div>
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <label>
              <h1>Name:</h1>
              <textarea style={textAreaStyle} type="textArea" name="userName" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br></br>
            <label>
              <h1>Current Weather?</h1>
            </label>
            <select style={selectStyle} name="weather" value={this.state.value} onChange={this.handleChange}>
              <option value="raining">Raining</option>
              <option value="snowing">Snowing</option>
              <option value="sunny">Sunny</option>
              <option value="cloudy">Cloudy</option>
              <option value="hot">Hot</option>
              <option value="cold">Cold</option>
            </select>
            <br></br>
            <input style={submitButtonStyle} type="submit" value="Submit" id="submitButton" />
          </form>
        </div>
      );
    } else {
      return (
              <div>
                <h1>Thank you {this.state.userName} for submitting the form.</h1>
                <h2>It's currently {this.state.weather}!</h2>
              </div>
            );
    }
  }
}

export default ReactForm;
