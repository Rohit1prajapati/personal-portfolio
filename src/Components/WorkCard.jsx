import './WorkCardStyle.css';
import React from 'react'
import { NavLink } from 'react-router-dom'
function WorkCard(props) {
    return (
        <div className='project-card'>
                    <img src={props.imgsrc} className='pro1' alt='img' />
                    <h2 className='project-title'>{props.title}</h2>
                    <div className='project-details'>
                        <p>{props.details}</p>
                        <div className='pro-btns'>
                            <NavLink to={props.view} className='btn'>View</NavLink>
                            <NavLink to='url.com' className='btn'>source</NavLink>
                        </div>
                    </div>
                </div>
    )
}

export default WorkCard