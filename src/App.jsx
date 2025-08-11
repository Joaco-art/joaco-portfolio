import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Frameworks from './components/Frameworks.jsx'
import { Element } from 'react-scroll'
import './App.css'

export default function App() {
 

  return (
    <>

      <div className='bg-gradient-to-r from-black via-gray-950 to-black'>

        <header>
          <nav>
          <Navbar name="Joaco" first="About" second="Services" third="Projects" fourth="Contact"/>
          </nav>
        </header>

        <main className='h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory lg:scroll-smooth'>
            <Element name="hero">
              <Hero/>
            </Element>
            <Element name="about">
              <About/>
            </Element>
            <Element name="services">
              <Services/>
            </Element>
            <Element name="frameworks">
              <Frameworks/>
            </Element>
            <Element name="projects">
              <Projects/>
            </Element>
            <Element name="contact">
              <Contact/>
            </Element>
        </main>
      </div>
      
    </>
  )
}
