import React from 'react'
import { navLinks } from '../Constants';
import ToggleButton from '../Components/ToggleButton';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
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
            <Router>
            <li key={nav.id}><Link to={nav.path}>{nav.name}</Link></li>
            </Router>
          ))}
        </ul>      
      </nav>
   </header>
     
    

   
  )
}

export default NavBar