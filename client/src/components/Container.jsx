import React, { Component } from "react"
import axios from "axios"
import { getItems } from "../services/items"

// import Landing from '../screens/Landing'
// import Home from '../screens/Home'

import Routes from "../routes"
import Header from "../screens/Header"
import Footer from "./shared/Footer"
import "../styles/Container.css"
import { verifyToken } from "../services/auth"


const API_KEY = "981f1b61aa5e31abce190e535142d7e9"
const explore = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      items: [], //this should be tied to "my movies from the backend",
      comments: [],
      explorerMovies: []
    }
  }

  async componentDidMount() {
    const user = await verifyToken()
    if (user) {
      try {
        // debugger
        const response = await axios.get(explore)
        // const items = await getItems(user.id)
        this.setState({
          explorerMovies: response.data.results
        })
      } catch (error) {
        alert("error")
      }
    }


    try {
      const items = await getItems()
      this.setState({ items })
    } catch (err) {
      console.error(err)
    }
  }


  addItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }))
  }

  addComment = comment =>
    this.setState(prevstate => ({
      comments: [...this.state.comments, comment]
    }))

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    console.log(this.state.explorerMovies)
    console.log("container addComment", this.addComment)

    // console.log(this.state.explorerMovies)

    const { user, items, item, explorerMovies, comments } = this.state

    return (
      <>
        <Header user={user} />
        <main className="container">
          <Routes
            movieData={explorerMovies}
            items={items}
            item={item}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            addComment={this.addComment}
            clearUser={this.clearUser}
            comments={comments}
          />
        </main>
        <Footer />
      </>
    )
  }
}
