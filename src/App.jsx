import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Project from './Project'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Skills from './Skills'
import Contact from './Contact'
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App