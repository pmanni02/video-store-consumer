import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TmbdMovie extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <p>Title: {this.props.title}</p>
        <p>Release Date:{this.props.releaseDate}</p>
      </div>
    );
  }
}

TmbdMovie.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string
};


export default TmbdMovie;
