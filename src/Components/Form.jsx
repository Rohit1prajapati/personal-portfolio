import './FormStyle.css';
import React from 'react'

function Form() {
  return (
    <div className='form'>
    <form>
        <label>Name</label>
        <input type='text'/>
        <label>Email</label>
        <input type='text'/>
        <label>Subject</label>
        <input type='text'/>
        <label>Message</label>
        <textarea rows='6' placeholder='Drop Message'/>
        <button className='btn'>Submit</button>

    </form>
    </div>
  )
}

export default Form