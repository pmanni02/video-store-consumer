import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TmbdMovie extends Component {
  constructor(props){
    super(props);
  }

  imageURL = (imageId) => {
    const imgPath = `https://image.tmdb.org/t/p/w300${imageId}`
    // console.log(imgPath);
    return imgPath;
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    // ideally a popup for confirmation of movie selected
    // check if movie is already in videostore api
    // if not, make a POST? request to the videostore api
    // show status message for success or failure
    // render Rental component
  }

  render(){
    return(
      <form onSubmit = {this.onFormSubmit}>
        <p> Title: {this.props.title} </p>
        <p>Release Date: {this.props.releaseDate}</p>
        <img
          src = {this.imageURL(this.props.poster)}
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
  poster: PropTypes.string
};


export default TmbdMovie;
