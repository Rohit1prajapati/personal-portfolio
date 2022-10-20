import './HeroSecStyle.css';
import React from 'react'
import Hero from '../Assets/hero-bg.jpg'
import {Link} from 'react-router-dom'

function HeroSec() {
    return (
        <div className='hero'>
            <div className='herobg-img'>
                <img className='hero-bg' src={Hero} alt='hero' />
            </div>
            <div className='heroheading'>
                <p>Hi, I Am Rohit Prajapati</p>
                <h1>React Developer</h1>
                <div className='btn-hero'>
                    <Link to='/Project' className='btn'>Project</Link>
                    <Link to='/Contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSec





