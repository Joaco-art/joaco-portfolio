import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

export default function App() {
 

  return (
    <>

    <div className='bg-gradient-to-r from-black via-gray-950 to-black'>

      <header>
        <nav>
        <Navbar name="Joaco" atr="About" atrr="Services" atrrr="Projects" atrrrr="Contact"/>
        </nav>
      </header>

        <main className='h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory lg:scroll-smooth'>
          <Hero/>
        </main>
    </div>
    
    </>
  )
}
