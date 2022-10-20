import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import Work from '../Components/Work'
import Prize from '../Components/Prize'
export default function Project() {
  return (
    <div>
      <NavBar/>
      <Hero2 heading='PROJECTS.' para='some of most recent works.'/>
      <Work/>  
          <Prize/>
      <Footer/>
    </div>
  )
}
