import React, { Component } from 'react';
import axios from 'axios';
import SearchTmbdForm from './SearchTmbdForm.js'

class Tmbd extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  render(){
    return(
      <div>
        <SearchTmbdForm />
      </div>
    );
  }
}

export default Tmbd;
