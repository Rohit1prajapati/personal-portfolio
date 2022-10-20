import './WorkCardStyle.css';
import React from 'react'
import WorkCard from './WorkCard';
import WorkData from './WorkData';
function Work() {
    const ncard = (elem) => {
        return (
            <>
                <WorkCard
                    imgsrc={elem.imgsrc}
                    title={elem.title}
                    details={elem.details}
                    view={elem.view}
                />
            </>
        )
    }
    return (
        <div className='work-container'>
            <h1 className='project-heading'>projects</h1>
            <span className='bar'/>
            <div className='project-container'>
                {WorkData.map(ncard)}
            </div>
        </div>
    )
}

export default Work;