import React, { Component } from 'react';
import axios from 'axios';
import RentalList from './components/RentalList';
import CustomerList from './components/CustomerList';
import './App.css';
import Tmbd from './components/Tmbd.js'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import Route from 'react-router-dom/Route';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: '',
      selectedCustomer: '',
      customerId: '',
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

  clearRentalForm = () => {
    this.setState({
      selectedMovie: '',
      selectedCustomer: '',
      customerId: '',
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
      this.setMessageStatus(this.state.status);
      this.clearRentalForm()
    })
    .catch((error) => {
      this.setState({
        status: error.message
      });
      this.setMessageStatus(this.state.status);
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
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title"><Link to="/">Ada Movies</Link></h1>
          </header>

          {this.statusMessage()}

          <div className="navigation">
            <button><Link to="/movies">MOVIES</Link></button>
            <button onClick={this.rentalCustomer}><Link to="/customers">CUSTOMERS</Link></button>
            <button onClick={this.searchTmbd}><Link to="/search">ADD TO LIBRARY</Link></button>
          </div>

          <span className={this.state.rentalFields}>
            <div className="Rent-form">
            <section className="chosen">
              <div><strong>Chosen Movie: </strong> {this.state.selectedMovie}</div>
              <div><strong>Chosen Customer: </strong> {this.state.selectedCustomer}</div>
            </section>
            <section><button onClick={this.addRental}>Process Rental</button></section>
            </div>
          </span>

          <section>
            <div className={this.rentalMovies}>
              <Route path="/movies" render={(props) => <RentalList {...props}  pickMovieDetailCallback={this.pickMovieDetail}/>} />
            </div>
            <div className={this.rentalCustomers}>
              <Route path="/customers" render={(props) => <CustomerList {...props}  pickCustomerDetailCallback={this.pickCustomerDetail}/>} />
            </div>
          </section>

          <div className={this.searchTmbd}>
            <Route path="/search" render={(props) => <Tmbd {...props}
              statusCallback = { this.setMessageStatus }/>} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
