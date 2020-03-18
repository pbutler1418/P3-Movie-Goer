import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import axios from "axios"
import { getItems, deleteItem, updateItem } from "../services/items"
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
      items: [],
      comments: [],
      explorerMovies: []
    }
  }

  async componentDidMount() {
    const user = await verifyToken()
    if (user) {
      try {
        const response = await axios.get(explore)
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
      console.log(items)
    } catch (err) {
      console.error(err)
    }
  }



  addItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }))
  }


  destroy = async (itemId) => {
    const removeMovie = await deleteItem(this.state.user._id, itemId)

    this.setState(prevState => ({
      items: prevState.items.filter(item =>
        item._id !== itemId
      )
    }))
    return <Redirect to={'/items'} />
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

    const { user, items, item, explorerMovies, comments } = this.state

    return (
      <div className='container'>
        <Header user={user} />
        <div className="routes">
          <Routes className='routes'
            movieData={explorerMovies}
            items={items}
            item={item}
            user={user}
            setUser={this.setUser}
            addItem={this.addItem}
            destroy={this.destroy}
            changeMovieItem={this.changeMovieItem}
            addComment={this.addComment}
            clearUser={this.clearUser}
            comments={comments}
          />
        </div>

        <Footer />
      </div>
    )
  }
}
