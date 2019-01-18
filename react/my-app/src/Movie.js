import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <Movieposter poster={this.props.poster}  />
        </div>
      )
    }
}

class Movieposter extends Component {
  render() {
    return (
      <img src={this.props.poster} />
    )
  }
}
export default Movie