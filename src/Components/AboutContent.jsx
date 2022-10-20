import './AboutConStyle.css';
import React from 'react'
import {Link} from 'react-router-dom'
import about1 from '../Assets/about1.jpg'
import about2 from '../Assets/about2.jpg'


function AboutContent() {
  return (
    <div className='about'>
    <div className='left'>
    <h1>who i am</h1>
    <p>i am a react developer and i create reasponsive secure website for my client</p>
    <Link to='/Contact'>
        <button className='btn'>Contact</button>
    </Link>
    </div>

    <div className='right'>
    <div className='img-container'>
        <div className='top-img'>
            <img src={about1} className='img' alt='true'/>
        </div>
        <div className='bottom-img'>
            <img src={about2} className='img' alt='true'/>
        </div>
    </div>
    </div>

    </div>
  )
}

export default AboutContent