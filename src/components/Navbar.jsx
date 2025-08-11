import { useState } from "react";
import {Link} from 'react-router-dom'

export default function Navbar(navbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
   
    

    return (
        <nav className="fixed bg-transparent w-screen h-32 md:p-10 p-5 flex justify-center items-center border-b-4 border-transparent z-10">

            <ul className="relative flex w-screen gap-5 text-xl z-10 items-center">
                <li className="relative group mr-auto ml-10 cursor-pointer">
                    <Link to="/" className="relative z-10 bottom-1 transition-colors duration-300"><span className="relative z-10 bottom-1 transition-colors duration-300 hidden lg:inline">{navbarProps.name}</span>  </Link> 
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>                     
                </li>

                {/* Icono hamburguesa animado solo visible en mobile */}
                <button
                    className="lg:hidden block focus:outline-none mr-2 relative w-4 h-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    <span className={`absolute left-0 top-0 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 top-2.5' : 'top-0'}`}></span>
                    <span className={`absolute left-0 top-2.5 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`absolute left-0 top-5 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 top-2.5' : 'top-5'}`}></span>
                </button>

                {/* Menú normal en lg+ */}
                <div className="lg:flex lg:flex-row hidden absolute right-0 gap-10 h-full mr-10">
                    <li className="relative group cursor-pointer" >
                        <Link to="/about" className="relative z-10 bottom-1 transition-colors duration-300"><span className="relative z-10 bottom-1 transition-colors duration-300">{navbarProps.first}</span></Link>
                        <div  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                    </li>

                    <li className="relative group cursor-pointer" >
                    <Link to="/services" className="relative z-10 bottom-1 transition-colors duration-300"><span className="relative z-10 bottom-1 transition-colors duration-300">{navbarProps.second}</span></Link>
                        <div  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                        
                    </li>

                    <li className="relative group cursor-pointer">
                        <Link to="/projects" className="relative z-10 bottom-1 transition-colors duration-300"><span className="relative z-10 bottom-1 transition-colors duration-300">{navbarProps.third}</span></Link>
                        <div  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                       
                    </li>

                    <li className="relative group cursor-pointer mr-10">
                        <Link to="/contact" className="relative z-10 bottom-1  transition-colors duration-300"><span className="relative z-10 bottom-1 transition-colors duration-300">{navbarProps.fourth}</span></Link>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                    </li>
                </div>

                {/* Overlay menú mobile */}
                {menuOpen && (
                    <div className={`fixed top-0 right-0 h-screen w-full bg-black bg-opacity-95 flex flex-col gap-10 items-center justify-center z-50 lg:hidden`}>
                        <button
                            className="absolute top-5 right-5 text-white text-3xl"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            &times;
                        </button>
                        <li className="hover:underline duration-300 cursor-pointer text-white text-2xl" onClick={() => {setMenuOpen(false);}}>
                           <Link to="/about">{navbarProps.first}</Link>
                        </li>

                        <li className="hover:underline duration-300 cursor-pointer text-white text-2xl" onClick={() => {setMenuOpen(false); }}>
                            <Link to="/services">{navbarProps.second}</Link>
                        </li>

                        <li className="hover:underline duration-300 cursor-pointer text-white text-2xl" onClick={() => {setMenuOpen(false); }}>
                            <Link to="/projects">{navbarProps.third}</Link>
                        </li>

                        <li className="hover:underline duration-300 cursor-pointer text-white text-2xl" onClick={() => {setMenuOpen(false); }}>
                            <Link to="/contact">{navbarProps.fourth}</Link>
                        </li>

                    </div>
                )}
            </ul>
        </nav>
    );
}

