import React, { Component } from 'react';
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
      customerId: '',
      hiddenMovies: 'hide',
      hiddenCustomers: 'hide',
      searchForm: 'hide',
      rentalFields: 'hide',
      status: ''
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

  addRental = () => {
    const movieTitle = this.state.selectedMovie;
    const customerId = this.state.customerId;
    const today = new Date()
    const dueDate = (new Date(today.setDate(today.getDate() + 7))).toISOString().slice(0,10)

    const url = 'http://localhost:3000/rentals/' + movieTitle + '/check-out?customer_id=' + customerId + '&due_date=' + dueDate

    axios.post(url)
    .then((response) => {
      console.log(response);
      this.setState({
        status: 'Movie Rental Processed!'
      });
    })
    .catch((error) => {
      this.setState({
        // message: error.message
        status: error.message
      });
    })
  }

  rentalMovies = () => {
    this.setState({
      hiddenMovies: 'show',
      hiddenCustomers: 'hide',
      searchForm: 'hide',
      rentalFields: 'show'
    });
  }

  rentalCustomer = () => {
    this.setState({
      hiddenMovies: 'hide',
      hiddenCustomers: 'show',
      searchForm: 'hide',
      rentalFields: 'show'
    });
  }

  searchTmbd = () => {
    this.setState({
      hiddenMovies: 'hide',
      hiddenCustomers: 'hide',
      searchForm: 'show',
      rentalFields: 'hide'
    })
  }

  statusMessage = () => {
    if (this.state.status !== ''){
      return <p>{this.state.status}</p>
    }
  }

  setMessageStatus = (status) => {
    this.setState({
      status: status
    });
    setTimeout(this.hideStatus, 2000);
  }

  hideStatus = () => {
    this.setState({
      status: ''
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Movies</h1>
        </header>

        {this.statusMessage()}

        <div className="navigation">
          <button onClick={this.rentalMovies}>MOVIES</button>
          <button onClick={this.rentalCustomer}>CUSTOMERS</button>
          <button onClick={this.searchTmbd}>ADD TO LIBRARY</button>
        </div>

        <div className="Rent-form">
          <span className={this.state.rentalFields}>
          <div>Chosen Movie: {this.state.selectedMovie}</div>
          <div>Chosen Customer: {this.state.selectedCustomer}</div>
          <button onClick={this.addRental}>Process Rental</button>
          </span>
        </div>

        <section className="tiles">
          <div className={this.state.hiddenCustomers}>
            <CustomerList pickCustomerDetailCallback={this.pickCustomerDetail}/>
          </div>
          <div className={this.state.hiddenMovies}>
            <RentalList pickMovieDetailCallback={this.pickMovieDetail}/>
          </div>
        </section>

        <div className={this.state.searchForm}>
          <Tmbd
            statusCallback = { this.setMessageStatus }
          />
        </div>

      </div>
    );
  }
}

export default App;
