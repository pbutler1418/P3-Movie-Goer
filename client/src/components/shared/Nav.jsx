import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Explore</NavLink>
    {/* <NavLink to='/my-movies'>Delete this</NavLink> */}
    <NavLink to='/items'>My Movies</NavLink>
    <NavLink to='/create'>Add Movie</NavLink>
  </nav>
)

export default Nav