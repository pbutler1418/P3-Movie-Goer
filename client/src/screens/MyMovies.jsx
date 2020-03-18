import React from 'react'
import Layout from '../components/shared/Layout'
// const pic = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg'

export default function Items(props) {
  const { user, items } = props

  if (user) {
    return (
      <Layout>
        <h1>My Movies</h1>
        {!items ? <h3>No Items at this time.</h3> : null}
        {/* <div className='movie-block'>
          </div> */}
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className="landing">
          <div className="main">
            {!items ? <h3>No Items at this time.</h3> : null}
          </div>
        </div>
      </Layout>
    )
  }
}