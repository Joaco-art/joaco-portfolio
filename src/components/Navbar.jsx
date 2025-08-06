import { useState } from "react";

export default function Navbar(navbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
   
    

    return (
        <nav className="fixed bg-black w-screen h-32 md:p-10 p-5 flex justify-center items-center border-b-4 border-transparent z-10">

            <ul className="relative flex w-screen gap-5 text-xl z-10 items-center">
                <li className="mr-auto ml-10 cursor-pointer">
                    <span className="hidden md:inline">{navbarProps.name}</span>
                    <span className="md:hidden">Joaco</span>
                    
                </li>

                {/* Icono hamburguesa animado solo visible en mobile */}
                <button
                    className="md:hidden block focus:outline-none mr-10 relative w-4 h-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    <span className={`absolute left-0 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-3' : 'translate-y-0'}`}></span>
                    <span className={`absolute left-0 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? 'opacity-0' : 'opacity-100 translate-y-3'}`}></span>
                    <span className={`absolute left-0 w-8 h-1 bg-white rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-3' : 'translate-y-6'}`}></span>
                </button>

                {/* Menú normal en md+ */}
                <div className="md:flex md:flex-row hidden absolute right-0 gap-10 h-full">
                    <li className="relative group cursor-pointer" >
                        <span className="relative z-10 bottom-1 group-hover:text-primary transition-colors duration-300">{navbarProps.atr}</span>
                        <div  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                    </li>
                    <li className="relative group cursor-pointer" >
                        <span className="relative z-10 bottom-1 group-hover:text-primary transition-colors duration-300">{navbarProps.atrr}</span>
                        <div  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                        
                    </li>
                    <li className="relative group cursor-pointer">
                        <span className="relative z-10 bottom-1 group-hover:text-primary transition-colors duration-300">{navbarProps.atrrr}</span>
                        <div  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                       
                    </li>
                    <li className="relative group cursor-pointer mr-10">
                        <span className="relative z-10 bottom-1 group-hover:text-primary transition-colors duration-300">{navbarProps.atrrrr}</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                    </li>
                </div>

                {/* Overlay menú mobile */}
                {menuOpen && (
                    <div className={`fixed top-0 right-0 h-screen w-full bg-black bg-opacity-95 flex flex-col gap-10 items-center justify-center z-50 md:hidden transition-opacity duration-600 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <button
                            className="absolute top-5 right-5 text-white text-3xl"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            &times;
                        </button>
                        <li className="hover:underline duration-300 cursor-pointer text-white text-2xl" onClick={() => {setMenuOpen(false);}}>{navbarProps.atr}</li>
                        <li className="hover:underline duration-300 cursor-pointer text-white text-2xl" onClick={() => {setMenuOpen(false); }}>{navbarProps.atrr}</li>
                        <li className="hover:underline duration-300 cursor-pointer text-white text-2xl" onClick={() => {setMenuOpen(false); }}>{navbarProps.atrrr}</li>
                        <li className="hover:underline duration-300 cursor-pointer text-white text-2xl" onClick={() => {setMenuOpen(false); }}>{navbarProps.atrrrr}</li>
                    </div>
                )}
            </ul>
        </nav>
    );
}

