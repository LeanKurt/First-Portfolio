import React from 'react'
import { useState } from 'react';
import '../contact.css'


const Contact = ({theme}) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  
  const TextInvalid = () => {
    return (
      <p className='error'>*Please enter more words</p>
    );
  }
  const formEmpty = () => {
    return (
      name && text
    );
  }
  return (
   <section className='contacts-page'>
    <div className='whole-container'>
      <div className='text-container'>
        <h1 className='my-heading'>Get in Touch</h1>
        <p className='my-email'>awitize78@gmail.com</p>

      </div>
      <div className='divider'>
        <form>
          <div className='form-container'>
           <div className='field'>
            <label htmlFor='text'>Your Name:</label>
            <input type='text'  value={name}id='text' name='text' onChange={e => setName(e.target.value)} required></input>
           </div>
           <div className='field'>
            <label htmlFor='email'>Your Email:</label>
            <input type='email' id='email' name='email' required></input>
            
           </div>
           <div className='field'>
            <h4 className='text-area'>Write Something for me:</h4>
            <textarea value={text} onChange={e => setText(e.target.value)}
            rows={8} 
            cols={50} 
            placeholder="Type something here..." required></textarea>
           </div>
           {text.length < 1 ? (
             <TextInvalid />
           ) : null}
           <div className='btn-container'>
            <button className={theme === "light" ? "btn-dark" : "btn-light"}>Submit</button>
           </div>
          </div>
        </form>
        </div>
    </div>
   </section>
  )
}

export default Contact