import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CommentForm from '../components/shared/CommentForm'
import Layout from '../components/shared/Layout'
import { createComment } from '../services/comments'

class CommentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: {
        omdb_movie_id: props.movie_id,
        text: '',
        user: props.user.username,
      },
      createdComment: null
    }
    console.log('comment create props', props.comments)
  }

  // this was the items app way
  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedComment = Object.assign(this.state.comment, updatedField)
    this.setState({ comment: editedComment })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const res = await createComment(this.state.comment)
    console.log('res.data', res.data)

    if (res.status === 201) {
      this.props.addComment(res.data)
      this.setState({
        createdComment: res.data
      })
    }
  }

 

  render() {
    const { handleChange, handleSubmit } = this
    const { comment } = this.state
    const { history } = this.props
    console.log(`comment`, comment)
    return (
      <Layout>
        <CommentForm
          comment={comment}
          history={history}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="../"
        />
      </Layout>
    )
  }
}
export default CommentCreate
