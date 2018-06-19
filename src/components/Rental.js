import React, { Component } from 'react';
import RentalList from './RentalList';
import NewRentalForm from './NewRentalForm';
import CustomerList from './CustomerList';
import axios from 'axios';

class Rental extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     selectedMovie: 'None',
  //     selectedCustomer: 'None',
  //   };
  // }

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
      <div>
        <div>
          <NewRentalForm addRentalCallback={this.addRental}/>
        </div>
        <div>
          <CustomerList />
        </div>
      </div>

    )
  }

}

export default Rental;
