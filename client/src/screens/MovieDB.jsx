import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import { getItemById } from '../services/movies'


class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      deleted: false
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


  render() {
    const { item } = this.state
    if (!item) {
      return <p>Loading...</p>
    }


    return (
      <Layout>
        <div className="item">
          <Link to="/items">
            <span> Back to all items</span>
          </Link>
          <h3>{item.title}-{item.link}</h3>

          <div className="buttons">
            <button className="danger" onClick={() => {
              this.props.delete(this.props.match.params.id);
              this.props.history.push('/items')
            }}>Delete Item
            </button>

            <button
              className="edit"
              onClick={() =>
                this.props.history.push(
                  `/items/${this.props.match.params.id}/edit`
                )
              }
            >Edit
            </button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Item