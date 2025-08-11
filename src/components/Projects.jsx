import GitHubThreeCarousel from './GitHubThreeCarousel.jsx' // el componente three.js que hicimos

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex items-center justify-center lg:snap-start w-screen md:h-screen h-auto overflow-hidden"
        >
            <div className="flex lg:flex-row flex-col lg:w-[80%] w-auto lg:h-[75%] h-auto rounded-xl border-2 border-gray-800">

                {/* Lado izquierdo con la lista/carrusel básico */}
                <div className="relative bg-gray-950 flex p-5 gap-10 lg:w-[50%] w-full lg:h-full h-auto lg:border-r-2 lg:border-gray-700 border-b-2 border-gray-700">
                <GitHubThreeCarousel username="Joaco-art" />
                </div>

                <div className="flex flex-col justify-start p-5 gap-10 lg:w-[50%] w-full lg:h-full h-auto bg-gray-950">
                    <div className='bg-red-500 w-full h-full p-32 border-2 border-gray-700 rounded-xl'></div>
                </div>

            </div>
        </section>
    )
}
