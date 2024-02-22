import NavBar from './Sections/NavBar';
import LandingSection from './Sections/LandingSection';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import './App.css'
function App() {
  return (
    <main>
        <NavBar />
      <section className='section'>
        <LandingSection />
      </section>
      <section className='section'>
        <Projects />
      </section>
      <section className='section'>
        <Contact />
      </section>
    </main>
  )
}

export default App
