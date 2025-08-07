import Card from './Card.jsx';
import './global.css';


export default function Services() {
    return (

      <section id="services" className="flex flex-col lg:snap-start lg:h-screen h-auto items-center justify-center w-screen overflow-hidden p-4 md:p-10">

        <h2 className="lg:text-6xl text-5xl mt-10 md:mt-0 font-bold text-center animated-gradient-text">My Services</h2>

        <div className="flex lg:flex-row flex-col flex-nowrap w-full h-auto md:p-5 p-0 items-center justify-center lg:gap-5 lg:mt-10 gap-0">

            <Card type="Web Development" desc="Creating responsive and modern websites using the latest technologies." />
            <Card type="UI/UX Design" desc="Designing user-friendly interfaces and experiences that enhance user satisfaction." />
            <Card type="Mobile App Development" desc="Building cross-platform mobile applications for both iOS and Android." />
            <Card type="E-commerce Solutions" desc="Developing and managing online stores with secure payment systems." />

        </div>
            

            
        
        </section>
        
    );
}   