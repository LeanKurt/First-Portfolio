import React from 'react'
import { useState } from 'react';
import '../contact.css'


const Contact = () => {
  const [name, setName] = useState("");
  return (
   <section className='contacts-page'>
    <div className='whole-container'>
      <div className='text-container'>
        <h1 className='my-heading'>Get in Touch</h1>
        <p className='my-email'>@Leankurtescano@gmail.com</p>

      </div>
      <div className='divider'>
        <form>
          <div className='form-container'>
           <div className='field'>
            <label htmlFor='text'>Your Name:</label>
            <input type='text'  value={name}id='text' name='text' onChange={e => setName(e.target.value)}></input>
            
           </div>
           <div className='field'>
            <label htmlFor='email'>Your Email:</label>
            <input type='email' id='email' name='email' required></input>
            
           </div>
           <div className='field'>
            <h4 className='text-area'>Write Something for me:</h4>
            <textarea
            rows={8} 
            cols={50} 
            placeholder="Type something here..."></textarea>
            
           </div>
           <div className='btn-container'>
            <button className='my-btn'>Submit</button>
           </div>
          </div>
        </form>
        </div>
    </div>
   </section>
  )
}

export default Contact