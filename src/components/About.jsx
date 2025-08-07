export default function About() {
    return (
        <section id="about" className="flex flex-col items-center justify-center lg:snap-start w-screen md:h-screen h-auto overflow-hidden p-0 md:p-10">

            <div className="flex lg:flex-row flex-col items-center justify-center w-[80%] lg:h-[60%] h-auto bg-radial from-black  to-gray-950 rounded-xl md:mt-20 mt-10 shadow-2xl border-2 border-primary">
              
                 <div className="flex flex-col items-start justify-start gap-10 p-10 w-full lg:w-[70%] h-full border-b-2 lg:border-r-2 border-primary lg:hover:w-[140%] duration-300">
                <h2 className="lg:text-6xl text-3xl font-bold text-center text-primary">About me</h2>
                <h3 className="lg:max-w-[70ch] max-w-[50ch] text-pretty lg:text-xl text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, numquam, corrupti fugiat nisi nam sint repudiandae vel mollitia praesentium placeat quas vero iusto eos deleniti iste soluta officiis! Aut, consequatur?</h3>            
                </div> 

                <div className="flex flex-col items-start justify-start gap-10 p-10  w-full lg:w-[70%] h-full lg:border-r-2 border-primary lg:hover:w-[140%] duration-300">
                <h2 className="lg:text-6xl text-3xl font-bold text-center text-primary">About me</h2>
                <h3 className="lg:max-w-[70ch] max-w-[50ch] text-pretty lg:text-xl text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, numquam, corrupti fugiat nisi nam sint repudiandae vel mollitia praesentium placeat quas vero iusto eos deleniti iste soluta officiis! Aut, consequatur?</h3>            
                </div> 

            </div>

           
            
        </section>
    )
}