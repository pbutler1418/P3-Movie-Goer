import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const API_KEY = '981f1b61aa5e31abce190e535142d7e9'
const input = "batman begins"
const explore = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
// const search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`

class Home extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(explore)
      console.log(response)
      this.setState({
        movies: response.data
      })
    }
    catch (error) {
      alert("error")
    }
  }
  render() {
    console.log(this.state.movies)


    let flicks = this.state.movies.length !== 0 && this.state.movies.results.map((result, index) => {

      console.log(this.state.movies.results)
      return (
        <div key={index}>
          <img src={result.poster_path} />
          <h2>{result.title}</h2>
          <h2>{result.id}</h2>
          <p>{result.overview}</p>
          <Link>
            <button onClick>Add to My List</button>
          </Link>
        </div>
      )
    })
    return (
      <>
        <h1>flicks</h1>
        {flicks}
      </>
    )
  }
}
export default Home;