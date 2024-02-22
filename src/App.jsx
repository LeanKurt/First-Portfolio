import NavBar from './Sections/NavBar';
import LandingSection from './Sections/LandingSection';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import './App.css'
function App() {
  return (
    <main>
        <NavBar />
      <section className='section1'>
        <LandingSection />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  )
}

export default App
