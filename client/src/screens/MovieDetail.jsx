import React from 'react'
import Layout from '../components/shared/Layout'
import CommentCreate from '.././screens/CommentCreate'
import Comments from './Comments'
import '../styles/movieDetail.css'


import ItemCreate from './ItemCreate'
import Items from './Items'
import { Link } from 'react-router-dom'





const pic = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg'

// import Movie from './Movie'


const MovieDetail = (props) => {
  const { movieData, index, user, addComment } = props

  const movie = movieData.find(movie => movie.id == props.match.params.id)

  const pic = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (

    <Layout key={index}>
      <div className='movie'>
        <img src={pic} alt={"movie poster"} />
        <div className='movie-right'>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>

          <div className='detail-buttons'>
          <Link to="/create">
          <button>Add to My Movie List</button>
        </Link>

        <Link to="/">
          <button> Go Back to Explore</button>
        </Link>

          </div>

        </div>
        
        </div>
        <CommentCreate user={user} movie_id={props.match.params.id} addComment={addComment} />
    </Layout>
  )
}

export default MovieDetail