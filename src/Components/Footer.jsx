import './FooterStyle.css';
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>

                <div className='left'>
                    <div className='location'>
                        <FaHome size={25} style={{ color: 'white', marginRight: '1rem' }} />
                        <div>
                            <p>8/20 west mehram nagar,</p>
                            <p> Delhi cantt-110010</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <FaPhone size={25} style={{ color: 'white', marginRight: '1rem' }} />
                        <p>8860767529</p>
                    </div>
                    <div className='phone'>
                        <FaMailBulk size={25} style={{ color: 'white', marginRight: '1rem' }} />
                        <p>rp958243@gmail.com</p>
                    </div>
                </div>

                <div className='right'>
                    <h4>About This Compony </h4>
                    <p>This is me Rohit Prajapati. I am create this website and i enjoy discussing new projects.</p>
                    <div className='social-icons'>
                        <FaFacebook size={35} style={{ color: 'white', marginRight: '1rem' }} />
                        <FaInstagram size={35} style={{ color: 'white', marginRight: '1rem' }} />
                        <FaTwitter size={35} style={{ color: 'white', marginRight: '1rem' }} />
                        <FaLinkedin size={35} style={{ color: 'white', marginRight: '1rem' }} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer

