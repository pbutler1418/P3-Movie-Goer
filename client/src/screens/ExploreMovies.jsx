import React from 'react'
import Movie from './Movie'
import SearchFunction from '../components/shared/Search'
import Layout from '../components/shared/Layout'
import '../styles/explore.css'


const ExploreMovies = ({ movieData }) => {

  const movies = movieData.map((movie, index) => {
    return (
      <Movie movie={movie} key={index} />
    )
  })

  return (
    <Layout>
      <h3>Explore Movies</h3>
      <br />
      <SearchFunction />
      <div className='movies-container'>
        {movies}
      </div>
    </Layout>
  )
}

export default ExploreMovies