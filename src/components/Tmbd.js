import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Tmbd.css'
import axios from 'axios';
import SearchTmbdForm from './SearchTmbdForm.js'
import ShowMovieResults from './ShowMovieResults.js'
// import TmbdMovie from './TmbdMovie'

class Tmbd extends Component {
  constructor(){
    super();
    this.state = {
      // searchIsHidden: false,
      moviesAreHidden: true,
      movieHidden: true,
      movies: []
    }
  }

  getMovies = (search) => {
    const url = 'http://localhost:3000//movies?query=';
    axios.get(`${url}${search}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          moviesAreHidden: false,
          movies: response.data
        })
        console.log(this.state.movies);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  displayComp = (stateVar) => {
    if (stateVar) { return 'hide' }
    return 'show';
  }

  render(){
    return(
      <div>
        <div className = 'show'>
          <SearchTmbdForm
            searchCallback = { this.getMovies }
          />
        </div>

        <div className = { this.displayComp(this.state.moviesAreHidden) }>
          <ShowMovieResults
            movies = { this.state.movies }
          />
        </div>

        <div className = {this.displayComp(this.state.movieHidden)}>
          
        </div>
      </div>
    );
  }
}

export default Tmbd;
