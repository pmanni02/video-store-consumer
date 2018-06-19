import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Rental from './components/Rental';
import './App.css';

import Tmbd from './components/Tmbd.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
