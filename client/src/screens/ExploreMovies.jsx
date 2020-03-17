import React from 'react'
import Movie from './Movie'
import SearchFunction from '../components/shared/Search'
import Layout from '../components/shared/Layout'


const ExploreMovies = ({ movieData }) => {

  const movies = movieData.map((movie, index) => {
    return (
      <Movie movie={movie} key={index} />
    )
  })

  return (
    <Layout>
      <h1>Explore Movies</h1>
      <SearchFunction />
      <div className='movies-container'>
      {movies}
      </div>
    </Layout>
  )
}

export default ExploreMovies