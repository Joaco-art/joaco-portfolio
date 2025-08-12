import GitHubThreeCarousel from './GitHubThreeCarousel.jsx'

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex items-center justify-center lg:snap-start w-screen min-h-screen overflow-hidden px-4 py-8"
    >
      <div className="flex flex-col lg:flex-row lg:w-[80%] w-full lg:h-[75%] h-auto rounded-xl border-2 border-gray-800 overflow-hidden">

        {/* Lado izquierdo con el carrusel */}
        <div className="relative bg-gray-950 flex p-4 sm:p-6 gap-4 lg:w-1/2 w-full lg:h-full min-h-[300px] lg:border-r-2 lg:border-gray-700 border-b-2 lg:border-b-0 border-gray-700">
          <GitHubThreeCarousel username="Joaco-art" />
        </div>

        {/* Lado derecho con contenido */}
        <div className="flex flex-col justify-start p-4 sm:p-6 gap-6 lg:w-1/2 w-full lg:h-full min-h-[300px] bg-gray-950">
          <div className="bg-red-500 w-full h-full p-8 sm:p-12 md:p-20 border-2 border-gray-700 rounded-xl flex items-center justify-center">
            <p className="text-white text-center text-lg sm:text-xl">
              Aquí puede ir la descripción o detalles del proyecto.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
