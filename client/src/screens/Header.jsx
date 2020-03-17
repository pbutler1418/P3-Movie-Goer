import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'
import '../styles/header.css'

const Header = ({ user }) => (
  <div className='header'>
    <h1>My Flicks</h1>
  </div>
)

export default Header