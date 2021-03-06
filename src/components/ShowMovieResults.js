import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TmbdMovie from './TmbdMovie';
import './ShowMovieResults.css'

class ShowMovieResults extends Component {
  statusUpdate = (status) => {
    this.props.tmbdStatusCallback(status);
  }

  renderMovies = () => {
    const movieList = this.props.movies.map((movie, index) => {
      return(
        <TmbdMovie
          key = { index }
          id = { movie.external_id }
          title = { movie.title }
          releaseDate = { movie.release_date }
          poster = { movie.image_url}
          overview = { movie.overview }
          statusCallback = { this.statusUpdate }
        />
      )
    })

    return movieList;
  }

  render(){
    return(
      <div className="tmbd-movie-list">
        { this.renderMovies() }
      </div>
    );
  }
}

ShowMovieResults.propTypes = {
  movies: PropTypes.array.isRequired,
  tmbdStatusCallback: PropTypes.func.isRequired
};


export default ShowMovieResults;
