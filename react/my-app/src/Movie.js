import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title,poster,genres,synopsis}){
  return(
    <div className="movie test">
      <div className="movie_column">
        <Movieposter poster={poster} alt={title} />
      </div>
      <div className="movie_column">
        <h1>{title}</h1>
        <div className="movie_genres">
          {genres.map((genre,index)=><Moviegenre genre={genre} key={index} />)}
        </div>
        <div className="movie_synopsis">           
          <LinesEllipsis
            text= {synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>    
      </div>
    </div>
  )
}

function Movieposter({poster,alt}){
  return(
    <img src={poster} title={alt} alt={alt} className="movie_poster" />
  )
}
function Moviegenre({genre}){
  return(
    <span className="movie_genre">{genre}</span>
  )
}

Movie.propTypes ={
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

Movieposter.propTypes ={
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

Moviegenre.propTypes ={
  genre: PropTypes.string.isRequired
}

export default Movie