import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './TmbdMovie.css'

class TmbdMovie extends Component {

  onFormSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3000/movies/';

    const title = encodeURIComponent(this.props.title);
    axios.get(`${url}${title}`)
      .then((response) => {
        console.log(response.data);
        this.props.statusCallback('This movie is already in the library');
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 404){
          this.addToLibrary();
        }
      });
  }

  addToLibrary = () => {
    const url = 'http://localhost:3000/movies/';
    const movieObj = {
      title: this.props.title,
      release_date: this.props.releaseDate,
      overview: this.props.overview,
      image_url: this.props.poster,
      external_id: this.props.id,
      inventory: 5
    }
    console.log(movieObj);

    axios.post(url , movieObj)
      .then((response) => {
        console.log(response);
        this.props.statusCallback('Movie posted!');
      })
      .catch((error) => {
        this.props.statusCallback(error.message);
      });
  }

  render(){
    return(
      <form onSubmit = {this.onFormSubmit} className="tmbd-movie">
        <h2>{this.props.title} </h2>
        <p>Release Date: {this.props.releaseDate}</p>
        <img
          src = {this.props.poster}
          alt='movie poster'/>
        <button type = "submit">Add Movie</button>
      </form>
    );
  }
}

TmbdMovie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  poster: PropTypes.string,
  overview: PropTypes.string,
  statusCallback: PropTypes.func
};


export default TmbdMovie;
