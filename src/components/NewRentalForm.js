import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewRentalForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: 'None',
      selectedCustomer: 'None',
    };
  }

  onFieldChange = (event) => {
    const fieldName =  event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
        <label htmlFor='movie'>Movie: </label>
        <input name='movie' value={this.state.selectedMovie} type='text' onChange={this.onFieldChange}/>
        </div>
        <div>
        <label htmlFor='customer'>Customer: </label>
        <input name='customer' value={this.state.selectedCustomer} type='text' onChange={this.onFieldChange}/>
        </div>
        <input type='submit' value='Create Rental' />
      </form>
    )
  }
}

export default NewRentalForm;
