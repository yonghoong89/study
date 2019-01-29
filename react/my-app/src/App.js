import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {title:"제목1",poster:"111"},{title:"제목2",poster:"222"},{title:"제목3",poster:"333"}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie,index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
