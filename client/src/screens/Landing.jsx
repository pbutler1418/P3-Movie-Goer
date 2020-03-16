import React from 'react'
// import Items from './Items'
import { Link } from 'react-router-dom'
import '../styles/landing.css'

const Landing = (props) => (
  <div className='landing'>
    <h4>The one place to keep track of all your favorite movies</h4>
    <div className="links">
      <Link to="/sign-in">
        <button>
          Sign In
          </button>
      </Link>
      <Link to="/sign-up">
        <button>Sign Up </button>
      </Link>
    </div>

  </div>
)

export default Landing