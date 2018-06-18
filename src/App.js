import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount = () => {
    let query =  'http://localhost:3000/movies'
    console.log(query)

    axios.get(query)
      .then((response) => {
        console.log(response);
        this.setState({
          movies: response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
        if (error.message) {
          this.renderError();
          console.log(error.message);
        }
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.movies}
        </p>
      </div>
    );
  }
}

export default App;
