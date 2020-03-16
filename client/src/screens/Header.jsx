import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'
import '../styles/header.css'


const authenticatedOptions = (
  <Navbar className='navbar'>
    {/* <NavLink to="/change-password">Change Password</NavLink> */}
    <NavLink to="/sign-out">Sign Out</NavLink>
  </Navbar>
)

const Header = ({ user }) => (
  <div className='header'>
    <h1>My Flicks</h1>
    {user ? authenticatedOptions : ''}
  </div>
)

export default Header