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
          title = { movie.title }
          releaseDate = { movie.release_date }
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
