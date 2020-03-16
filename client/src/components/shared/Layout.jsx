import React from 'react'
import Nav from './Nav'
import '../../styles/layout.css'

const Layout = (props) => (
  <div className='layout'>
    <Nav />
    <div className='main'>
      {props.children}
    </div>
  </div>
)

export default Layout