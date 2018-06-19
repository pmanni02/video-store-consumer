import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import axios from 'axios';
import RentalList from './components/RentalList';
import CustomerList from './components/CustomerList';
import './App.css';

import Tmbd from './components/Tmbd.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: '',
      selectedCustomer: '',
      customerId: ','
    };
  }

  pickMovieDetail = (title) => {
    console.log(title);
    this.setState({
      selectedMovie: title
    })
  }

  pickCustomerDetail = (id, name) => {
    console.log(id);
    this.setState({
      selectedCustomer: name,
      customerId: id
    })
  }

  addRental = (movie,customer) => {
    const movieTitle = movie;
    const customerId = customer;
    const today = new Date()
    const dueDate = (new Date(today.setDate(today.getDate() + 7))).toISOString().slice(0,10)

    const url = 'http://localhost:3000/rentals/' + movieTitle + '/check-out?customer_id=' + customerId + '&due_date=' + dueDate

    axios.post(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      this.setState({
        message: error.message
      });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Movies</h1>

        </header>
        <div>{this.state.selectedMovie}</div>
        <div>{this.state.selectedCustomer}</div>
        <div>

          <CustomerList pickCustomerDetailCallback={this.pickCustomerDetail}/>
          <RentalList pickMovieDetailCallback={this.pickMovieDetail}/>
          
        </div>
      </div>
    );
  }
}

export default App;
