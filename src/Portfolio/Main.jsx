import React from 'react'
import '../Assets/Css/Style.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project'
import{ Routes, Route} from 'react-router-dom'

export default function Main() {
  return (
  <>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/Project' element={<Project/>} /> 
      <Route  path='/About' element={<About/>} />
      <Route  path='/Contact' element={<Contact/>} />
    </Routes>
  </>
  )
}
