import React, { Component } from 'react'
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
        <h3>Update Movie</h3>
        <br />
          <h3>{item.title}-{item.link}</h3>

          <button onClick={() => {
            this.props.delete(this.props.match.params.id);
            this.props.history.push('/items')
          }}>Delete Movie
            </button>

          <button onClick={() =>
            this.props.history.push(
              `/items/${this.props.match.params.id}/edit`
            )
          }
          >Edit Movie
            </button>
      </Layout>
    )
  }
}

export default Item