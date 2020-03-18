import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import MovieForm from "../components/shared/MovieForm"
import Layout from "../components/shared/Layout"
import { createItem } from "../services/movies"

class ItemCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: {
        title: "",
        link: ""
      },
      createdItem: null
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedItem = Object.assign(this.state.item, updatedField)
    this.setState({ item: editedItem })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const res = await createItem(this.props.user._id, this.state.item)
    if (res.status === 201) {
      this.props.addItem(res.data)
      this.setState({
        createdItem: res.data
      })
    }
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { createdItem, item } = this.state
    const { history } = this.props

    if (createdItem) {
      return <Redirect to={`/items`} />
    }

    return (
      <Layout>
        <h3>Add to My Movies</h3>
        <MovieForm
          item={item}
          history={history}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </Layout>
    )
  }
}

export default ItemCreate
