// import React, { Component } from 'react'
// import { Link, Redirect } from 'react-router-dom'
// import Layout from '../components/shared/Layout'
// import { getCommentsByMovieId } from '../services/comments'
// //maybe add a delete function?


// class Comment extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       comment: null
//     }
//   }
//   async componentDidMount() {
//     console.log('component mounted in comment.jsx', this.props)
//     try {
//       const comment = await getCommentsByMovieId({ omdb_movie_id: this.props.match.params.id })
//       this.setState({ comment })
//     } catch (err) {
//       console.error(err)
//     }
//   }
  
//   render() {
//     const { comment } = this.state
//     if (!comment) {
//       return <p>Loading...</p>
//     }

//     return (
//       <Layout>
//         <div className="comment">
//           <p>comment: {comment.text}</p>
//           <p>by: {comment.user}</p>
//         </div>
//       </Layout>
//     )
//   }
// }
// export default Comment