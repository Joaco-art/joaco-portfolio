import spainFlag from '../assets/flag-for-flag-spain-svgrepo-com.svg'
import Avatar from '../assets/avatar-svgrepo-com.svg'
import Graduate from '../assets/graduate-university-svgrepo-com.svg'
import Bachelor from '../assets/graduate-mortarboard-svgrepo-com.svg'
import Software from '../assets/software-svgrepo-com.svg'

export default function About() {
    return (
        <section id="about" className="flex flex-col items-center justify-center lg:snap-start w-screen xl:h-screen h-auto overflow-hidden p-0 md:p-10">

            <div className="flex xl:flex-row flex-col items-center justify-center w-[80%] lg:h-[60%] h-auto bg-radial from-black  to-gray-950 rounded-xl md:mt-20 mt-10 shadow-2xl border-2 border-primary">
              
                 <div className="flex flex-col items-start justify-start gap-10 p-10 w-full xl:w-[70%] h-full border-b-2 lg:border-r-2 border-primary xl:hover:w-[140%] duration-300">
                <h2 className="lg:text-6xl text-3xl font-bold text-center text-primary">About me</h2>
                <h3 className="lg:max-w-[70ch] max-w-[50ch] text-pretty lg:text-xl text-sm">
                    Joaquin Farias Ovelar is 18 years old who was born in Móstoles, Spain. He was graduated of High School in 2023, obtaining a Bachelor's degree in Science in 2025. Nowadays, 
                    he is studying the Software Engineer degree at Rey Juan Carlos University.
                </h3>
                <h3 className="lg:max-w-[70ch] max-w-[50ch] text-pretty lg:text-xl text-sm">
                    He has been programming since 16 years old, when he discovered his true passion for coding. He started from learning the basics (HTML, CSS, JS) to advanced frameworks such as React, Astro, Figma or Node.js                  
                </h3>            
                </div> 

                <div className="flex flex-col items-start justify-start gap-10 p-10  w-full xl:w-[70%] h-full xl:border-r-2 border-primary xl:hover:w-[140%] duration-300">
                <h2 className="lg:text-6xl text-3xl font-bold text-center text-primary">Summary</h2>
                <ul className='w-full h-full flex flex-col items-start justify-center md:gap-8 gap-5 lg:p-0 lg:text-xl md:text-base text-sm'>
                    <li className='flex flex-row items-center justify-center gap-5'><img src={Avatar} alt="Avatar" className="w-10 h-10 text-center"/>18 years old (25/03/2007).</li>
                    <li className='flex flex-row items-center justify-center gap-5'><img src={spainFlag} alt="Spain" className="w-10 h-10 text-center"/>Móstoles, Madrid, Spain.</li>
                    <li className='flex flex-row items-center justify-center gap-5'><img src={Graduate} alt="Spain" className="w-10 h-10 text-center"/>Graduated at Clara Campoamor's High School, 2023.</li>
                    <li className='flex flex-row items-center justify-center gap-5'><img src={Bachelor} alt="Spain" className="w-10 h-10 text-center"/>Obtained Bachelor's degree at Clara Campoamor, 2025.</li>
                    <li className='flex flex-row items-center justify-center gap-5'><img src={Software} alt="Spain" className="w-10 h-10 text-center"/>Software Engineer degree at Rey Juan Carlos University, 2025-Actuality</li>

                </ul>
                </div> 

            </div>

           
            
        </section>
    )
}