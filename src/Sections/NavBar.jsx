import React from 'react'
import { navLinks } from '../Constants';
import ToggleButton from '../Components/ToggleButton';
import '../App.css';



const NavBar = ({theme, toggleTheme}) => {
  return (
    <header className={theme === 'light' ? 'nav-dark' : 'nav-light'}>
      <div className='btn-container'>
      <ToggleButton theme={theme} toggleTheme={toggleTheme}/>
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