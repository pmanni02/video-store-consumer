import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tmbd.css'
import axios from 'axios';
import SearchTmbdForm from './SearchTmbdForm.js'

class Tmbd extends Component {
  constructor(){
    super();
    this.state = {
      searchIsHidden: false,
      view: 'search'
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

  displayComp = (stateVar) => {
    if (stateVar) { return 'hide' }
    return 'show';
  }

  render(){
    return(
      <div>
        <div className = { this.displayComp(this.state.searchIsHidden) }>
          <SearchTmbdForm
            searchCallback = { this.getMovies }
          />
        </div>

        <div className = { this.displayComp(this.state.moviesAreHidden) }>

        </div>
      </div>
    );
  }
}

Tmbd.propTypes = {

};

export default Tmbd;
