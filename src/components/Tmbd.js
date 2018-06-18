import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchTmbdForm from './SearchTmbdForm.js'

class Tmbd extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }

  getMovies = (search) => {
    console.log('In TMBD.js');
    console.log(`Search input: ${search}`);
  }

  render(){
    return(
      <div>
        <SearchTmbdForm
          searchCallback = { this.getMovies }
        />
      </div>
    );
  }
}

Tmbd.propTypes = {

};

export default Tmbd;
