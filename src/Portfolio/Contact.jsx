import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import Form from '../Components/Form'

export default function Contact() {
  return (
    <div>
    <NavBar/>
    <Hero2 heading='CONTACT.' para='Lets have a chat with me'/>
    <Form/>
    <Footer/>
    </div>
  )
}
