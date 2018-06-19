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


  clearForm = () => {
    this.setState({
      selectedMovie: 'None',
      selectedCustomer: 'None',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

      this.props.addRentalCallback(this.state.selectedMovie, this.state.selectedCustomer)
      this.clearForm();

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
        <label htmlFor='selectedMovie'>Movie: </label>
        <input name='selectedMovie' value={this.state.selectedMovie} type='text' onChange={this.onFieldChange}/>
        </div>
        <div>
        <label htmlFor='selectedCustomer'>Customer: </label>
        <input name='selectedCustomer' value={this.state.selectedCustomer} type='text' onChange={this.onFieldChange}/>
        </div>
        <input type='submit' value='Create Rental' />
      </form>
    )
  }
}

export default NewRentalForm;

NewRentalForm.propTypes = {
  addRentalCallback: PropTypes.func
}
