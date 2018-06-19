import React, { Component } from 'react';
import Customer from './Customer';
import PropTypes from 'prop-types';
import axios from 'axios';
import './CustomerList.css'

class CustomerList extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    }
  }

  componentDidMount = () => {
    let query =  'http://localhost:3000/customers'
    console.log(query)

    axios.get(query)
      .then((response) => {
        console.log(response);
        this.setState({
          customers: response.data
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

  pickCustomer = (id, name) => {
    this.props.pickCustomerDetailCallback(id, name)
  }

  renderCustomerList = () => {
    const customerList = this.state.customers.map((item, index) => {
      return(
        <Customer
          key={index}
          id={item.id}
          name={item.name}
          address={item.address}
          city={item.city}
          state={item.state}
          postal_code={item.postal_code}
          phone={item.phone}
          customerCallback={this.pickCustomer}
        />
      )
    })
    return customerList
  }

  renderError = () => {
    return (
      <p className='validation-errors-dislay'>
        {this.state.error}
      </p>
    )
  }

  render() {
    return (
      <div className="customer-list">
        {this.renderCustomerList()}
      </div>
    )
  }
}

export default CustomerList;

CustomerList.propTypes = {
  pickCustomerDetailCallback: PropTypes.func,
}
