import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {}

  componentDidMount(){
    this._getMoives()
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie)=>{
      return <Movie 
      title={movie.title}
      poster={movie.medium_cover_image} 
      key={movie.id}
      genres={movie.genres} 
      synopsis={movie.synopsis} />
    });
    return movies
  }

  _getMoives = async () =>{
    const movies = await this._callapi() 
    this.setState({
      movies:movies //movies 모던 자바스크립트
    })
  }

  _callapi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())//데이터를 상황에 맞게 편집 할 수 있음
    .then(json => json.data.movies)
    .catch(error => console.log(error))
  }

  render() {
    const {movies} = this.state; 
    return (
      <div className={movies ? "app" : "app_loading"}>
       {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
  
}

export default App;
