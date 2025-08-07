

export default function Projects() {
    return (
        <section  className="flex flex-col items-center justify-center lg:snap-start w-screen px-10 py-32 md:h-screen h-auto overflow-hidden p-4 md:p-10">

            <div className="flex flex-row w-[80%] h-[75%]  mt-32  rounded-xl border-2 border-gray-800 ">

                <div className="relative flex flex-col justify-start p-5 gap-10 w-[50%] h-full border-r-2 border-gray-700">
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

                <div className="flex flex-col justify-start p-5 gap-10 w-[50%] h-full bg-gray-950">
                <img src="" alt="img" />
                </div>
                
                
            </div>

            
        </section>
    )
}