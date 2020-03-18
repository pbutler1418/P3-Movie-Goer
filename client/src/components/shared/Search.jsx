import React, { Component } from "react"
import axios from "axios"
const API_KEY = '981f1b61aa5e31abce190e535142d7e9'


class SearchFunction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      input: [],
      searchQuery: ''
    }
  }


  fetchInfo = async (searchQuery) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      console.log(response)
      this.setState({
        movies: response.data
      })
    }
    catch (error) {
      alert("We don't have information for that. Refresh the page and ry Again!")
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    this.fetchInfo(this.state.searchQuery)
  }


  Search = ({ onChange, onSubmit, name, value }) => {
    return (
      <form onSubmit={e => onSubmit(e)} className='search-form'>
        <div className="search">
          <input
            value={value}
            onChange={e => onChange(e)}
            name={name}
            type="text"
            placeholder="Enter Search Query"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    )
  }

  render() {
    console.log(this.state.movies)
    let movies = this.state.movies.length !== 0 && this.state.movies.results.map((movie, index) => {
      return (
        <div key={index}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={"movie poster"} />
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Overview: {movie.overview}</p>
        </div>
      )
    })
    return (
      <>
        <Search className='search'
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.searchQuery}
          name="searchQuery"
          placeholder="Enter Search Query"
        />
        {movies}
      </>
    )
  }
}


export default SearchFunction

const Search = ({ onChange, onSubmit, name, value }) => {
  return (
    <form onSubmit={e => onSubmit(e)} className='search-form'>
        <input
          value={value}
          onChange={e => onChange(e)}
          name={name}
          type="text"
          placeholder="Enter Search Query"
        />
        <button type="submit">Search</button>
    </form>
  )
}