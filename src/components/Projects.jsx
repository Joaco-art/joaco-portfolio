

export default function Projects() {
    return (
        <section className="flex items-center justify-center lg:snap-start w-screen md:h-screen h-auto overflow-hidden">

            <div className="flex lg:flex-row flex-col lg:w-[80%] w-auto lg:h-[75%] h-auto rounded-xl border-2 border-gray-800">

                <div className="relative bg-gray-950 flex flex-col justify-start p-5 gap-10 lg:w-[50%] w-full lg:h-full h-auto lg:border-r-2 lg:border-gray-700 border-b-2 border-gray-700">
                    <h3 className="text-5xl font-bold text-center mt-10">Project 1</h3>
                    <p className="text-lg">
                        - I am a software engineer with a passion for building web applications.
                    </p>
                    <p className="text-lg">
                        - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                    <p className="absolute bottom-5 left-5">Arrows</p>

                    <p className="absolute bottom-5 right-5">Arrows</p>
                </div>

                <div className="flex flex-col justify-start p-5 gap-10 lg:w-[50%] w-full lg:h-full h-auto bg-gray-950">
                    <img src="" alt="img" />
                </div>
                
                
            </div>

            
        </section>
    )
}