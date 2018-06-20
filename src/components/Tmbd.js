import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import axios from 'axios';
import SearchTmbdForm from './SearchTmbdForm.js'
import ShowMovieResults from './ShowMovieResults.js'
// import TmbdMovie from './TmbdMovie'

class Tmbd extends Component {
  constructor(){
    super();
    this.state = {
      moviesAreHidden: true,
      movieHidden: true,
      movies: []
    }
  }

  getMovies = (search) => {
    const url = 'http://localhost:3000//movies?query=';
    axios.get(`${url}${search}`)
      .then((response) => {
        this.setState({
          moviesAreHidden: false,
          movies: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  displayComp = (stateVar) => {
    if (stateVar) { return 'hide' }
    return 'show';
  }

  statusUpdate = (status) => {
    this.props.statusCallback(status);
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
            tmbdStatusCallback = {this.statusUpdate}
          />
        </div>
      </div>
    );
  }
}

Tmbd.propTypes = {
  statusCallback: PropTypes.func.isRequired
}

export default Tmbd;
