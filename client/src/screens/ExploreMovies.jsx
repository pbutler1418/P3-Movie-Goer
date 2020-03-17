import React from 'react'
import Movie from './Movie'
import SearchFunction from '../components/shared/Search'


const ExploreMovies = ({ movieData }) => {

  const movies = movieData.map((movie, index) => {
    return (
      <Movie movie={movie} key={index} />
    )
  })

  return (
    <>
      <h1>Explore Movies</h1>
      <SearchFunction/>
      {movies}
    </>
  )
}

export default ExploreMovies