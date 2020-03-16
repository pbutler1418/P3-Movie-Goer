import React from 'react'
import { Link } from 'react-router-dom'




const Movie = (props) => {

  const { movie, index } = props

  const pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  
  return (
    <div className="Movie" key={index}>
      <img src={pic} alt={"movie poster"}/>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>

      <Link to='/create'>
        <button>Add Movie to My Movies</button>
      </Link>

      <Link to={`movies/${movie.id}`}>
        <button> Show Detail</button>
      </Link>

    </div>

  )

}

export default Movie