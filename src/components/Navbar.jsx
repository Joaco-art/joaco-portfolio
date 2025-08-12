// Navbar.jsx
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

export default function Navbar({ name, first, second, third, fourth }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (target) => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      scroller.scrollTo(target, {
        duration: 300,
        smooth: true,
        containerId: 'main-scroll',
        offset: -64
      })
    } else {
      navigate('/', { state: { scrollTo: target } })
    }
  }

  const linkClasses = 'relative z-10 bottom-1 transition-colors duration-300 cursor-pointer text-white'
  const underlineClasses = 'absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out'

  const items = [
    { name: first, to: 'about' },
    { name: second, to: 'services' },
    { name: third, to: 'projects' },
    { name: fourth, to: 'contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-screen h-32 bg-transparent z-50 flex items-center px-6">
      <ul className="flex items-center w-full gap-4">
        <li className="mr-auto ml-4 group">
          <button onClick={() => handleClick('hero')} className={`${linkClasses} text-2xl font-bold hidden lg:inline`}>
            {name}
          </button>
        </li>

        <button
          className="lg:hidden block focus:outline-none mr-2 relative w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`absolute left-0 top-0 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 top-3' : 'top-0'}`}></span>
          <span className={`absolute left-0 top-3 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute left-0 top-6 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 top-3' : 'top-6'}`}></span>
        </button>

        <div className="hidden lg:flex lg:flex-row gap-10 mr-10">
          {items.map((it, i) => (
            <li key={i} className="relative group text-lg">
              <button onClick={() => handleClick(it.to)} className={linkClasses}>
                {it.name}
              </button>
              <div className={underlineClasses} />
            </li>
          ))}
        </div>

        {menuOpen && (
          <div className="fixed top-0 right-0 h-screen w-full bg-black bg-opacity-95 flex flex-col gap-10 items-center justify-center z-50 lg:hidden">
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              &times;
            </button>

            {items.map((it, i) => (
              <li key={i} className="list-none">
                <button
                  onClick={() => handleClick(it.to)}
                  className="text-white text-2xl hover:underline duration-300"
                >
                  {it.name}
                </button>
              </li>
            ))}

          </div>
        )}
      </ul>
    </nav>
  )
}
