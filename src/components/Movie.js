import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  render() {
    return (
      <article>
        <div>{this.props.title}</div>
        <img src={this.props.image_url} alt={this.props.title}/>
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
}
