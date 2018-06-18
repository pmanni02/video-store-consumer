import React, { Component } from 'react';
import axios from 'axios';

class SearchTmbdForm extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  render(){
    return(
      <form>
        <div>
           <label
             htmlFor = "text">Search:
           </label>
           <input name = "text" value = { this.state.text } type = "text"
             onChange = { this.onFieldChange }
           />
         </div>
      </form>
    );
  }
}

export default SearchTmbdForm;
