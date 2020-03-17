import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CommentForm from '../components/shared/CommentForm'
import Comments from '../screens/Comments'
import Layout from '../components/shared/Layout'
import { createComment } from '../services/comments'
import { getCommentsByMovieId } from '../services/comments'
import '../styles/comments.css'

class CommentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: {
        omdb_movie_id: props.movie_id,
        text: '',
        user: props.user.username,
      },
      createdComment: null,
      comments: []
    }
  }



  getComments = async () => {
    try {
      const comments = await getCommentsByMovieId(this.props.movie_id)
      console.log('comments in getComments', comments)
      this.setState(
        { comments: comments }
      )
    } catch (err) {
        console.error(err)
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedComment = Object.assign(this.state.comment, updatedField)
    this.setState({ comment: editedComment })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const res = await createComment(this.state.comment)

    if (res.status === 201) {
      this.props.addComment(res.data)
      this.setState({
        createdComment: res.data
      })
    }
    this.getComments()
  } 

  async componentDidMount() {
    this.getComments()
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { comment, comments } = this.state
    const { history, user, movie_id } = this.props
    return (
        <div className='comments-section'>
        <CommentForm
          comment={comment}
          history={history}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="../"
        />
        <Comments user={user} omdb_movie_id={movie_id} comments={comments} comments={comments}/>
        </div> 
    )
  }
}
export default CommentCreate
