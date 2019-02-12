import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


class Movie extends Component {

  // static PropTypes = {
  //   title:PropTypes.string.isRequried,
  //   poster:PropTypes.string
  // }

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