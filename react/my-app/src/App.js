import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movietitle = ["제목1","제목2","제목3"]
const movieimg = ["111","222","333"]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movietitle[0]} poster={movieimg[0]} />
        <Movie title={movietitle[1]} poster={movieimg[1]} />
        <Movie title={movietitle[2]} poster={movieimg[2]} />
      </div>
    );
  }
}

export default App;
