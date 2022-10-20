import './PrizeStyle.css';
import React from 'react'
import {Link} from 'react-router-dom'

function Prize() {
  return (
    <div className='cards-container'>
    <div className='cards'>
        <div className='card'>
            <h3>-basic-</h3>
            <span className='bar'></span>
            <p className='rate'>$100</p>
            <p>-3 pages-</p>
            <p>-5 days-</p>
            <p>Features</p>
            <p>Responsive Design</p>
            <Link to='/Contact' className='btn'>PURCHASE NOW</Link>
        </div>
        <div className='card'>
            <h3>-Premium-</h3>
            <span className='bar'></span>
            <p className='rate'>$200</p>
            <p>-5 pages-</p>
            <p>-8 days-</p>
            <p>Features</p>
            <p>Responsive Design</p>
            <Link to='/Contact' className='btn'>PURCHASE NOW</Link>
        </div>
        <div className='card'>
            <h3>-Business-</h3>
            <span className='bar'></span>
            <p className='rate'>$300</p>
            <p>-7 pages-</p>
            <p>-3 days-</p>
            <p>Features</p>
            <p>Responsive Design</p>
            <Link to='/Contact' className='btn'>PURCHASE NOW</Link>
        </div>
    </div>

    </div>
  )
}

export default Prize