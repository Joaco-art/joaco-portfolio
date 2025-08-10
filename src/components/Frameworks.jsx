import reactSvg from '../assets/react.svg';
import javascriptSvg from '../assets/javascript-svgrepo-com.svg';
import htmlSvg from '../assets/html-5-svgrepo-com.svg';
import tailwindcssSvg from '../assets/tailwindcss-icon-svgrepo-com.svg';
import astroSvg from '../assets/astro-svgrepo-com.svg';
import figmaSvg from '../assets/figma-svgrepo-com.svg';


export default function Frameworks() {

    const skills = [
        {
            type: 'React',
            img: reactSvg,
// Azul React
        },
        {
            type: 'JavaScript',
            img: javascriptSvg,
        },
        {
            type: 'HTML',
            img: htmlSvg,
        },
        {
            type: 'Tailwind CSS',
            img: tailwindcssSvg,
        },
        {
            type: 'Astro',
            img: astroSvg,
        },
        {
            type: 'Figma',
            img: figmaSvg,
        },
    ];

    return (
        <section id="frameworks" className="flex flex-col lg:snap-start  lg:h-screen h-auto items-center justify-center w-screen overflow-hidden p-4 md:p-10">

            <h2 className="lg:text-6xl text-3xl mt-10 md:mt-0 font-bold text-center animated-gradient-text">Frameworks</h2>
            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-8 md:gap-5 w-[70%] md:w-[50%] lg:h-[80%] h-auto bg-gradient-to-br from-black to-gray-950 rounded-xl md:mt-20 mt-10 shadow-2xl border-2 border-primary p-10 md:p-8 place-items-center">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={skill.img} alt={skill.type} className="w-32 h-32 object-contain" />
                    </div>
                ))}
            </div>

      

        </section>
    )
}