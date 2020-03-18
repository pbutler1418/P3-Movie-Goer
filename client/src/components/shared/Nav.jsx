import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className='nav'>
    <NavLink to='/'>Explore</NavLink>
    <NavLink to='/items'>My Movies</NavLink>
    <NavLink to='/create'>Add Movie</NavLink>
    <NavLink to="/sign-out" className="signOut">Sign Out</NavLink>
  </nav>
)

export default Nav