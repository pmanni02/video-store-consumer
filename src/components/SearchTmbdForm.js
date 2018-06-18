import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SearchTmbdForm extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
    }
  }

  onFieldChange = (event) => {
    const search = event.target.value;
    this.setState({
      search,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // call separate function for axios call to Tmbd
    this.props.searchCallback(this.state.search);

    // clear form
    this.setState({
      search: '',
    });
    // hide search component

    // console.log('Submit event');
    // console.log(`Searched Term: ${this.state.search}`);
  }


  render(){
    return(
      <form onSubmit = { this.onFormSubmit } >
        <div>
           <label
             htmlFor = "text">Search:
           </label>
           <input name = "text" value = { this.state.search } type = "text"
             onChange = { this.onFieldChange }
           />
         </div>
         <input type = "submit" value = "Search TMBD"/>
      </form>
    );
  }
}

SearchTmbdForm.propTypes = {
  searchCallback: PropTypes.func.isRequired
};

export default SearchTmbdForm;
