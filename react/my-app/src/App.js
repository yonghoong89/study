import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {title:"제목1",poster:"111"},{title:"제목2",poster:"222"},{title:"제목3",poster:"333"}
]

class App extends Component {

  state = {

  }

  componentDidMount(){
    setTimeout( ()=> {
      this.setState({
        movies : [
          {title:"제목1",poster:"111"},{title:"제목2",poster:"222"},{title:"제목3",poster:"333"},{title:"add",poster:"444"}
        ]
      })
    }, 1000)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie,index)=>{
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    });
    return movies
  }

  render() {
    return (
      <div className="App">
       {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;
