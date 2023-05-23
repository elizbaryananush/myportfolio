import React, { useState } from 'react'
import './App.scss'
import Navbar from './Components/Navbar'
import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Components/About'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Layout} />
          <Route path='/aboutme' Component={About} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
