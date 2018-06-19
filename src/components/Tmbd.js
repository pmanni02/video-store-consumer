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
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=4bc8e1bdfa9b893a8f74030d299fd75d&query=';
    console.log('In TMBD.js');
    console.log(`Search input: ${search}`);
    axios.get(`${url}${search}`)
      .then( (response) => {
        console.log(response.data.results);
      })
      .catch( (error) => {
        console.log(error);
      });
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
