import React from 'react'

function Links() {
  return (
    <div className='Links'>
      <h1>Quick Links</h1>
      <div className="link">
        <ul>
          <a href="#header">
            <li>
              <h4>About</h4>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M24,8.5v7.5h-3v-4.879l-8,8-6-6-4.81,4.81L.069,15.81l6.931-6.931,6,6,5.879-5.879h-4.879v-3h7.5c1.379,0,2.5,1.121,2.5,2.5Z" /></svg>
            </li>
          </a>
          <a href="#projects">

            <li>
              <h4>Projects</h4>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M24,8.5v7.5h-3v-4.879l-8,8-6-6-4.81,4.81L.069,15.81l6.931-6.931,6,6,5.879-5.879h-4.879v-3h7.5c1.379,0,2.5,1.121,2.5,2.5Z" /></svg>
            </li>
          </a>
          <a href="#footer">

            <li>
              <h4>Find me</h4>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M24,8.5v7.5h-3v-4.879l-8,8-6-6-4.81,4.81L.069,15.81l6.931-6.931,6,6,5.879-5.879h-4.879v-3h7.5c1.379,0,2.5,1.121,2.5,2.5Z" /></svg>
            </li>
          </a>
        </ul>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default Links
