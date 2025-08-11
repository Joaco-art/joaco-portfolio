import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Frameworks from './components/Frameworks.jsx'
import './App.css'

export default function App() {
 
  return (
    <>
      <BrowserRouter>
        <div className='bg-gradient-to-r from-black via-gray-950 to-black'>
          <header>
            <nav>
              <Navbar name="Joaco" first="About" second="Services" third="Projects" fourth="Contact"/>
            </nav>
          </header>
          <main className='h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory lg:scroll-smooth'>
            <Routes>
              <Route path='/' element={<Hero/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/frameworks' element={<Frameworks/>}/>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}
