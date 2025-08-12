// App.jsx
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { scroller, Element } from 'react-scroll'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Frameworks from './components/Frameworks.jsx'
import './App.css'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const target = location.state.scrollTo
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 500,
          smooth: true,
          containerId: 'main-scroll',
          offset: 0
        })
        window.history.replaceState({}, document.title, location.pathname)
      }, 50)
    }
  }, [location])

  return (
    <main id="main-scroll" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth pt-32 bg-gradient-to-r from-black to-gray-900 scrollbar-hide">
      <Element name="hero" className="snap-start">
        <Hero />
      </Element>

      <Element name="about" className="snap-start">
        <About />
      </Element>

      <Element name="services" className="snap-start">
        <Services />
      </Element>

      <Element name="frameworks" className="snap-start">
        <Frameworks />
      </Element>

      <Element name="projects" className="snap-start">
        <Projects />
      </Element>

      <Element name="contact" className="snap-start">
        <Contact />
      </Element>
    </main>
  )
}

export default function App() {
  return (
    <Router>
      {/* Navbar fuera de Routes para que esté siempre visible */}
      <Navbar name="Joaco" first="About" second="Services" third="Projects" fourth="Contact" />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
