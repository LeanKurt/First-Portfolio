import NavBar from './Sections/NavBar';
import LandingSection from './Sections/LandingSection';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


function App() {
 const [theme, setTheme] = useState("light");

 const toggleTheme = () => {
  setTheme(prevTheme => prevTheme === "light" ? "dark" : "light"); 
 }

  return (
    <main>
    <NavBar theme={theme} toggleTheme={toggleTheme}/>
    <section id="landing-section" className={theme === "light" ? "section-dark" : "section-light"}>
      <LandingSection theme={theme}/>
    </section>
    <section id="projects-section" className={theme === "light" ? "section2-dark" : "section2-light"}>
      <Projects  theme={theme}/>
    </section>
    <section id="contact-section" className={theme === "light" ? "section3-dark" : "section3-light"}>
      <Contact theme={theme}/>
    </section>
  </main>
  )
}


export default App
