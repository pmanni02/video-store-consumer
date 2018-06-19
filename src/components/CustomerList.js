import React, { Component } from 'react';
import Customer from './Customer';
import axios from 'axios';

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
      <div>
        {this.renderCustomerList()}
      </div>
    )
  }
}

export default CustomerList;
