import React from 'react'
import Footer from '../Components/Footer'
import HeroSec from '../Components/HeroSec'
import NavBar from '../Components/NavBar'
import Work from '../Components/Work'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <HeroSec/>
        <Work/>
        <Footer/>
    </div>
  )
}
