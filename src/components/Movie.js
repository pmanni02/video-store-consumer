import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

class Movie extends Component {

  rentalDetail = () => {
    this.props.movieCallback(this.props.title)
  }

  render() {
    return (
      <article className="movie">
        <h3>{this.props.title}</h3>
        <img src={this.props.image_url} alt={this.props.title}  onClick={this.rentalDetail}/>
        <p>{this.props.overview}</p>
        <p>{this.props.release}</p>
      </article>
    )
  }
}

export default Movie;

Movie.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    release: PropTypes.string,
    image_url: PropTypes.string,
    movieCallback: PropTypes.func,
}
