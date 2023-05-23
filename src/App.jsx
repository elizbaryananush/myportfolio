import React, { useState } from 'react'
import './App.scss'
import Navbar from './Components/Navbar.jsx'
import Layout from './components/Layout.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Components/About.jsx'
import Header from './Components/Header'
import Links from './Components/Links'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {
     
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<div>
            <Header/>
            <Links />
            <Projects/>
            <Footer />
          </div>} />
          <Route path='/aboutme' Component={About} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
