import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import CommentForm from '../components/shared/CommentForm'
import Comments from '../screens/Comments'
import Layout from '../components/shared/Layout'
import { createComment } from '../services/comments'
import { getCommentsByMovieId } from '../services/comments'

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
    console.log('res.data', res.data)

    if (res.status === 201) {
      this.props.addComment(res.data)
      this.setState({
        createdComment: res.data
      })
    }
    this.getComments()
  } 

  async componentDidMount() {
    console.log('comp did mount', this.props.movie_id)
    this.getComments()
    console.log('comp did mount array', this.state.comments)
  }
  
  render() {
    const { handleChange, handleSubmit } = this
    const { comment, comments } = this.state
    console.log('comments[] in render', comments)
    const { history, user, movie_id } = this.props
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
        <Comments user={user} omdb_movie_id={movie_id} comments={comments} comments={comments}/>
      </Layout>
    )
  }
}
export default CommentCreate
