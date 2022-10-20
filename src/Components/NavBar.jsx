import '../Components/NavStyle.css'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false);
    const changecolor = () => {
        if (window.scrollY >= 10) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changecolor);


    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'>
                <h1>Portfolio.</h1>
            </Link>
            <ul className={click ? 'navLinks active' : 'navLinks'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Project'>Project</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: 'white' }} />) : (<FaBars size={30} style={{ color: 'white' }} />)}
            </div>
        </div>
    )
}
