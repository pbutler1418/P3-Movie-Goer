import React from 'react'
import Layout from '../components/shared/Layout'

export default function Items(props) {
  const { history, match, user, items } = props
  const renderButton = id => {
    if (user) {
      return (
        <button className="form-container" onClick={() => history.push(`${match.url}/${id}`)}>
          Update Movie 
        </button>

      )
    } else {
      return null
    }
  }

  const renderItems = () => {
    if (items) {
      return items.map(item => {
        return (
          <div className="landing" key={item._id}>
            <h3>{item.title} - {item.link}</h3>
            {renderButton(item._id)}
            <br/>
          </div>
        )
      })
    } else {
      return null
    }
  }

  if (user) {
    return (
      <Layout>
        <div>
          <h3>My Movies</h3>
          {!items ? <h3>No Items at this time.</h3> : null}
          <div className="landing">{renderItems()}</div>
        </div>
      </Layout>
    )
  } else {
    return (
      <div className="landing">
        <div className="main">
          {!items ? <h3>No Items at this time.</h3> : null}
          <div className="form-container">{renderItems()}</div>
        </div>
      </div>
    )
  }
}