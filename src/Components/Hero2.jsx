import './Hero2Style.css';
import React from 'react'

function Hero2(props) {
  return (
    <div className='hero2img'>
        <div className='heading'>
          <h1>{props.heading}</h1>
          <p>{props.para}</p>
        </div>
    </div>
  )
}

export default Hero2

//commmiitt