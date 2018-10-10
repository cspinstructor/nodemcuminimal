import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sensor1: ''
    };
  }

  componentDidMount() {
    setInterval(() => {
      axios
        .get('/getsensor1')
        .then(result => {
          this.setState({ sensor1: result.data });
        })
        .catch(err => {
          this.setState({ errors: err.response.data });
        });
    }, 3000);
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center header">
          <h1>Sensor Data</h1>
          <p>Displays sensor data received from NodeMCU</p>
        </div>

        <div className="jumbotron text-center sensorvalue">
          <label htmlFor="sensor1">Sensor1 Value</label>
          <br />
          <label>{this.state.sensor1} </label>
        </div>
      </div>
    );
  }
}

export default App;
