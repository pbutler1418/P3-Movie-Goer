import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/shared/Layout'

export default function Items(props) {
  const { history, match, user, items } = props
  // const renderButton = id => {
  //   if (user) {
  //     return (
  //       <button onClick={() => history.push(`${match.url}/${id}`)}>
  //         See More
  //       </button>
  //     )
  //   } else {
  //     return null
  //   }
  // }

  const renderItems = () => {
    if (items) {
      return items.map(item => {
        return (
          <div className="item" key={item._id}>

            <Link to="/items/:id/edit" className="editPage">
              <h3>{item.title} - {item.link}</h3>
            </Link>
            {/* {renderButton(item._id)} */}
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
          <div className="item-container">{renderItems()}</div>
        </div>
      </Layout>
    )
  } else {
    return (
      <div className="landing">
        <div className="main">
          {!items ? <h3>No Items at this time.</h3> : null}
          <div className="item-container">{renderItems()}</div>
        </div>
      </div>
    )
  }
}