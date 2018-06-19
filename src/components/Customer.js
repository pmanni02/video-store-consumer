import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profile from './profile.jpg'

class Customer extends Component {

  rentalDetail = () => {
    this.props.customerCallback(this.props.id, this.props.name)
  }

  render() {
    return (
      <article>
        <div>{this.props.id}</div>
        <img src={profile} onClick={this.rentalDetail}/>
        <p>{this.props.name}</p>
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
