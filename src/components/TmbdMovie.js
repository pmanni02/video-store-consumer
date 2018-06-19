import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class TmbdMovie extends Component {
  constructor(props){
    super(props);
  }

  // imageURL = (imageId) => {
  //   const imgPath = `https://image.tmdb.org/t/p/w200${imageId}`
  //   // console.log(imgPath);
  //   return imgPath;
  // }

  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.props);
  //   axios.post('http://localhost:3000/movies/', {title: 'Babe'})
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render(){
    return(
      <form onSubmit = {this.onFormSubmit}>
        <p> Title: {this.props.title} </p>
        <p>Release Date: {this.props.releaseDate}</p>
        <img
          src = {this.props.poster}
          alt='movie poster'/>
        <input type = "submit" value = "Add Movie"/>
      </form>
    );
  }
}

TmbdMovie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  poster: PropTypes.string,
  overview: PropTypes.string
};


export default TmbdMovie;
