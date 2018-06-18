import React, { Component } from 'react';
import './App.css';

class Rental extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
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

  renderMovielist = () => {
    const movieList = this.state.movies.map((item, index) => {
      return(
        <Card
          key={index}
          index={index}
          id={item.card.id}
          text={item.card.text}
          emoji={item.card.emoji}
          deleteCardCallback={this.deleteCard}
        />
      )
    })
    return cardList
  }

  renderError = () => {
    return (
      <p className='validation-errors-dislay'>
        {this.state.error}
      </p>
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.renderCardlist()}
        </div>
      </div>

    )
  }

}

export default Rental;
