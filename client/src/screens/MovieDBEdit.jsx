import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import MovieForm from '../components/shared/MovieForm'
import { getItemById, updateItem } from '../services/movies'
import '../styles/addToMyMovies.css'
import Layout from '../components/shared/Layout'


class ItemEdit extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      item: {
        title: '',
        link: ''
      },
      updated: false
    }
  }

  async componentDidMount() {
    try {
      const item = await getItemById(this.props.match.params.id)
      this.setState({ item })
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedItem = Object.assign(this.state.item, updatedField)
    this.setState({ item: editedItem })
  }

  handleSubmit = async event => {
    event.preventDefault()

    updateItem(this.props.match.params.id, this.state.item)
    this.props.history.push('/items')
  }

  render() {
    const { item, updated } = this.state
    const { handleChange, handleSubmit } = this
    const { history } = this.props

    if (updated) {
      return <Redirect to={`/items/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
        <div className="form-container">
          <h3>Edit Movies</h3>
          <br />
          <h3>{item.title} - {item.link}</h3>
          <MovieForm
            history={history}
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            cancelPath={`/items/${this.props.match.params.id}`}
          />
        </div>
      </Layout>
    )
  }
}
export default ItemEdit
