import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import './SearchTmbdForm.css';

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
  }


  render(){
    return(
      <form onSubmit = { this.onFormSubmit } >
        <div>
           <label
             htmlFor = "text"><strong>Search: </strong> 
           </label>
           <input name = "text" value = { this.state.search } type = "text"
             onChange = { this.onFieldChange }
           />
           <button type = "submit">Search TMBD</button>
         </div>

      </form>
    );
  }
}

SearchTmbdForm.propTypes = {
  searchCallback: PropTypes.func.isRequired
};

export default SearchTmbdForm;
