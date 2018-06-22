import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import axios from 'axios';
import SearchTmbdForm from './SearchTmbdForm.js'
import ShowMovieResults from './ShowMovieResults.js'

class Tmbd extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

  getMovies = (search) => {
    const url = 'http://localhost:3000//movies?query=';
    axios.get(`${url}${search}`)
      .then((response) => {
        this.setState({
          movies: response.data
        });
        console.log(this.state.movies);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  statusUpdate = (status) => {
    this.props.statusCallback(status);
  }

  render(){
    return(
      <div>
        <div>
          <SearchTmbdForm
            searchCallback = { this.getMovies }
          />
        </div>

        <div >
          <ShowMovieResults
            movies = { this.state.movies }
            tmbdStatusCallback = { this.statusUpdate }
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
