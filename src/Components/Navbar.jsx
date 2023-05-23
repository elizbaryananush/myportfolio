import React, { useState } from 'react'

function Navbar() {
  const [black , setBlack] = useState(true);

  if(!black) {
    const blt = window.getComputedStyle(document.documentElement).getPropertyValue('--light' , '--extradark');
    document.documentElement.style.setProperty('--light', '#000');
    document.documentElement.style.setProperty('--medium', '#000');
    document.documentElement.style.setProperty('--dark', '#000');
    document.documentElement.style.setProperty('--extradark', '#f6f6f6');
    console.log(blt);
  }else{
    const blt = window.getComputedStyle(document.documentElement).getPropertyValue('--light' ,'--extradark');
    document.documentElement.style.setProperty('--light', '#f0f0f0');
    document.documentElement.style.setProperty('--medium', '#bdbdbd');
    document.documentElement.style.setProperty('--dark', '#4e4e4e');
    document.documentElement.style.setProperty('--extradark', '#000');
    console.log(blt);
  }
  return (
    <nav className='navbar'>
      <ul>
        <a href="/#header"><li>About</li></a>
        <a href="/#projects"><li>Projects</li></a>
        <a href="/#footer"><li>Find me</li></a>
      </ul>
      <div className="checkbox-wrapper">
        <label className="switch">
          <input type="checkbox"  onClick={()=>setBlack(!black)}/>
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar
