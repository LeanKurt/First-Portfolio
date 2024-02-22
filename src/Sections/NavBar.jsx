import React from 'react'
import { navLinks } from '../Constants';
import ToggleButton from '../Components/ToggleButton';
import '../App.css';



const NavBar = () => {
  return (
    <header>
      <div className='btn-container'>
      <ToggleButton />
      </div>
      <nav className='nav-bar'>
        <ul>
          {navLinks.map((nav) => (
            <li key={nav.id}>{nav.name}</li>
          ))}
        </ul>      
      </nav>
      
   </header>
     
    

   
  )
}

export default NavBar