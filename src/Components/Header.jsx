import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header' id='header'>
      <div className="left">
        <h1>Hello.</h1>
        <h1>I'm Anush.</h1>
        <p>I'm Anush . I'm 17 y/o self-taught web developer . You can read more about me down in below</p>
        <Link to='/aboutme'><button className='btn'>More</button></Link>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Header
