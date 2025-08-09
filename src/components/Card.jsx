import './global.css';

export default function Card(card) {
    return (
        <div className="w-full max-w-md min-w-[220px] flex-shrink-0 md:p-5 p-3 flex flex-wrap justify-center hover:scale-105 duration-300 cursor-pointer">
            <div className="card-border-animation  flex flex-col bg-[radial-gradient(ellipse_at_center,_#14151e_0%,_#000000_100%)] text-center md:px-4 px-3 rounded-2xl shadow-2xl w-full h-64 md:h-80 justify-center gap-6">
                <h3 className="lg:text-3xl text-2xl font-semibold text-text">{card.type}</h3>
                <p className="lg:text-lg text-base text-gray-300">{card.desc}</p>
            </div>
        </div>
    );
}