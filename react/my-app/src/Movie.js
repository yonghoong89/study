import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
      return (
        <div>
          <h1>영화제목</h1>
          <Movieposter/>
        </div>
      )
    }
}

class Movieposter extends Component {
  render() {
    return (
      <img src="https://search.pstatic.net/common?type=u&size=100x133&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20181227_80%2F1545901137289EGbWK_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2"/>
    )
  }
}
export default Movie