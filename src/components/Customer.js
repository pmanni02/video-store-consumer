import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profile from './profile.jpg'
import './Customer.css'

class Customer extends Component {

  rentalDetail = () => {
    this.props.customerCallback(this.props.id, this.props.name)
  }

  render() {
    return (
      <article className="customer">
        <img src={profile} onClick={this.rentalDetail}/>
        <h2>{this.props.name}</h2>
        <p>{this.props.address}</p>
        <p>{this.props.city}, {this.props.state} {this.props.postal_code}</p>
        <p>{this.props.phone}</p>
      </article>
    )
  }
}

export default Customer;

Customer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  phone: PropTypes.string,
  customerCallback: PropTypes.func,
}
