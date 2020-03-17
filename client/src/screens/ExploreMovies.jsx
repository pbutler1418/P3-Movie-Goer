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
      <div className='explore-search'>
      <h4>Explore Movies</h4>
      <SearchFunction />
      </div>
      <div className='movies-container'>
      {movies}
      </div>
    </Layout>
  )
}

export default ExploreMovies