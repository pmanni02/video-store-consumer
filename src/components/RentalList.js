import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
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
    this.props.pickRentalDetailCallback(id)
  }

  render() {
    return (
      <div>
        <div>
          {this.renderMovieList()}
        </div>
      </div>
    )
  }
}

export default RentalList;

RentalList.propTypes = {
  pickRentalDetailCallback: PropTypes.func,
}
