import Avatar from '../assets/peeps-avatar-alpha.png'
import Socials from './Socials.jsx'

export default function Hero() {
    return (
        <section
            id="hero"
            className="flex md:flex-row md:snap-start flex-col-reverse md:h-screen h-auto w-screen overflow-hidden justify-center items-center p-4 md:mt-20 mt-0 "
        >
            <div className="flex flex-col md:items-start items-center justify-center md:w-[50%] w-full h-full md:gap-5 gap-2 p-4 md:p-8 rounded-lg">
                <p className="xl:text-lg text-sm font-semibold">
                    Welcome to my portfolio!
                </p>
                <h1  className="xxl:text-7xl lg:text-6xl text-3xl font-bold text-white mb-4">
                    Joaquín Farias Ovelar
                </h1>
                <p  className="xxl:text-4xl lg:text-2xl text-xl font-bold text-primary pb-4">
                    Software Engineer & UI/UX Designer
                </p>
                <p  className="lg:text-xl text-sm md:max-w-[75ch] max-w-[50ch] mb-10">
                Determined professional with a strong background in software engineering and a passion for design. Quick learner and a team player, always ready to collaborate with others to achieve the expected results without hesitating.
                </p>
                <div  className="flex flex-row gap-4 md:text-lg text-small text-gray-300 mb-8">
                    <button className="px-6 md:py-3 py-1 bg-accent text-white rounded-lg hover:bg-secondary transition duration-300 text-sm lg:text-xl">
                        View Projects
                    </button>
                    <button className="md:px-6 px-4 py-3 bg-transparent border-4 border-white text-white rounded-lg hover:bg-gray-800 transition duration-500 text-sm lg:text-xl">
                        Download CV
                    </button>
                </div>
                <div className="w-full flex justify-center md:justify-start duration-300">
                    <Socials/>
                </div>
            </div>

            <div  className="flex flex-col items-center justify-center md:w-[50%] w-full h-full">
                    <img 
                        src={Avatar} 
                        alt="Avatar" 
                        className="w-auto h-auto"
                        
                    />
            </div>
        </section>
    )
}    