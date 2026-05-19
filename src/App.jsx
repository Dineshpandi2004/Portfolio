import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Project from './Project';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />

      <Routes>
        <Route path="/about" element={<About />} />
          <Route path="/Project" element={<Project />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App