import React, { Component } from 'react';
import RentalList from './RentalList';
import NewRentalForm from './NewRentalForm';
import CustomerList from './CustomerList';

class Rental extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     selectedMovie: 'None',
  //     selectedCustomer: 'None',
  //   };
  // }

  render() {
    return (
      <div>
        <div>
          <NewRentalForm />
        </div>
        <div>
          <CustomerList />
        </div>
      </div>

    )
  }

}

export default Rental;
