import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import { getItemById, deleteItem } from '../services/items'


class Item extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      item: null,
      deleted: false
    }
  }

  async componentDidMount() {
    try {
      const item = await getItemById(this.props.match.params.id)
      this.setState({ item })
      console.log(item)
    } catch (err) {
      console.error(err)
    }
  }

  // destroy = () => {
  //   deleteItem(this.props.user._id, this.state.item._id)
  //     .then(() => this.setState({ deleted: true }))
  //     .catch(console.error)
  // }

  render() {
    const { item, deleted } = this.state
    console.log(this.state.item)
    if (!item) {
      return <p>Loading...</p>
    }


    return (
      <Layout>
        <div className="item">
          <Link to="/items">
            <span> Back to all items</span>
          </Link>
          <h3>{item.title}</h3>
          <p>{item.link}</p>

          <div className="buttons">
            <button className="danger" onClick={() => { this.props.delete(this.props.match.params.id); this.props.history.push('/items') }}>
              Delete Item
            </button>

            <button
              className="edit"
              onClick={() =>
                this.props.history.push(
                  `/items/${this.props.match.params.id}/edit`
                )
              }
            >
              Edit
            </button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Item