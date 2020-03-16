import React, { Component } from 'react'
import { getCommentsByMovieId } from '../services/comments'


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }


  async componentDidMount() {
    console.log('comments component props', this.props)
    try {
      const comments = await getCommentsByMovieId(this.props.omdb_movie_id)
        this.setState({ comments: comments })
    } catch (err) {
        console.error(err)
    }
}


  render() {
  
  const { comments } = this.state

  const renderComments = () => {
    console.log('this should log comments to be displayed from comments.jsx', comments)
    if (comments) {
      return comments.map(comment => {
        return (
          <div className="comment" key={comment._id}>
            <p>Comment: {comment.text}</p>
            <p>Written by: {comment.user}</p>
          </div>
        )
      })
    } else {
      return null
    }
  }

  return (
    <div>
      <h4>Comments will be displayed here</h4>
      {!comments ? <h3>No comments at this time.</h3> : null}
      <div className="comment-container">{renderComments()}</div>
    </div>
  )
    
  }
 
}


export default Comments