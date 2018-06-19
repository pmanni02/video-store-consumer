import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TmbdMovie from './TmbdMovie';

class ShowMovieResults extends Component {
  constructor(props){
    super(props);
  }

  renderMovies = () => {
    const movieList = this.props.movies.map((movie, index) => {
      return(
        <TmbdMovie
          key = { index }
          id = { movie.id }
          title = { movie.title }
          releaseDate = { movie.release_date }
          poster = { movie.poster_path }
        />
      )
    })

    return movieList;
  }


  render(){
    return(
      <div>
        { this.renderMovies() }
      </div>
    );
  }
}

ShowMovieResults.propTypes = {
  movies: PropTypes.array.isRequired,
};


export default ShowMovieResults;
