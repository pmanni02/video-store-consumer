import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import './RentalList.css'
import axios from 'axios';

class RentalList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount = () => {
    let query =  'http://localhost:3000/movies'
    console.log(query)

    axios.get(query)
      .then((response) => {
        console.log(response);
        this.setState({
          movies: response.data
        })
      })
      .catch((error) => {
        this.setState({
          error: error.message
        });
        if (error.message) {
          this.renderError();
          console.log(error.message);
        }
      }
    );
  }

  renderMovieList = () => {
    const movieList = this.state.movies.map((item, index) => {
      return(
        <Movie
          key={index}
          id={item.id}
          title={item.title}
          overview={item.overview}
          release={item.release_date}
          image_url={item.image_url}
          movieCallback={this.pickMovie}
        />
      )
    })
    return movieList
  }

  renderError = () => {
    return (
      <p className='validation-errors-dislay'>
        {this.state.error}
      </p>
    )
  }

  pickMovie = (id) => {
    this.props.pickMovieDetailCallback(id)
  }

  render() {
    return (
        <div className="rental-list">
          {this.renderMovieList()}
        </div>
    )
  }
}

export default RentalList;

RentalList.propTypes = {
  pickMovieDetailCallback: PropTypes.func,
}
