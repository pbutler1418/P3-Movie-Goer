import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'

const Landing = () => (
  <div className='landing'>
    <h2>The place to keep track of all your favorite movies</h2>
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