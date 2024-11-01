import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Works from '../pages/Works'
import { Route, Routes } from 'react-router-dom'
function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element ={<Contact/>}/>
    <Route path='/works' element ={<Works/>}/>
  </Routes>
  )
}

export default Routers
