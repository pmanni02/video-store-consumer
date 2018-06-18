import React, { Component } from 'react';
import axios from 'axios';

class Tmbd extends Component {
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

export default Tmbd;
