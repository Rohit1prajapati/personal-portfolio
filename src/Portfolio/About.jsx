import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import AboutContent from '../Components/AboutContent'

export default function About() {
  return (
    <div>
       <NavBar/>
       <Hero2 heading='ABOUT.' para='i am friendly front-end developer' />
       <AboutContent/>
    <Footer/>
    </div>
  )
}
