import React, { Component } from 'react'
import { signOut } from '../services/auth'

class SignOut extends Component {
  componentDidMount() {
    const { history, clearUser, user } = this.props
    signOut(user)
      .then(() => clearUser())
      .finally(() => history.push('/'))
  }

  render() {
  

    return (
      <p className="signOut">
        ''
      </p>
    )
  }
}

export default SignOut