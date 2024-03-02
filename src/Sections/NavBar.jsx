import React from 'react'
import { navLinks } from '../Constants';
import ToggleButton from '../Components/ToggleButton';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import '../App.css';
import Projects from './Projects';



const NavBar = ({theme, toggleTheme}) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className={theme === 'light' ? 'nav-dark' : 'nav-light'}>
      <div className='btn-container'>
      <ToggleButton theme={theme} toggleTheme={toggleTheme}/>
      </div>
      <nav className='nav-bar'>
        <ul>
        {navLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`#${nav.path}`} onClick={() => scrollToSection(nav.path)}>
                {nav.name}
              </a>
            </li>
          ))}                
        </ul>      
      </nav>
   </header>
  )
}

export default NavBar