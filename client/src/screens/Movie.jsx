import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/movie.css'




const Movie = (props) => {

  const { movie, index } = props

  const pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <div className="Movie" key={index}>
      <img src={pic} alt={"movie poster"} />
      <div className='movie-text'>
        <h4>{movie.title}</h4>
        <p>Release Date: {movie.release_date}</p>
        <p>Overview: {movie.overview}</p>

        <div className="movie-buttons">
          <Link to='/create' >
            <button className='movie-button'>Save Movie</button>
          </Link>

          <Link to={`movies/${movie.id}`}>
            <button className='movie-button'> Show Detail</button>
          </Link>

        </div>

      </div>
    </div>

  )

}

export default Movie