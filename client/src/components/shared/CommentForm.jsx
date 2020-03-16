import React from 'react'

const CommentForm = (props) => {
  console.log('props of commentform', props)
  const { text, user, obdb_movie_id } = props.comment
  console.log('user', user)
  return (
    <div className='comment-container'>
      <form onSubmit={props.handleSubmit}>
        <label>Your Comment</label>
        <input
          placeholder='Your comment goes here'
          value={text}
          name='text'
          type='text'
          required
          onChange={props.handleChange}
        />
        <input type="submit" className="button" autoFocus />
        {/* <button type='submit'>Submit</button> this needs to save data in backend */}

      </form>
    </div>
  )
}



export default CommentForm

//need cancelpath later
// <button className='danger' onClick={() => history.push(cancelPath)}>Cancel </button>