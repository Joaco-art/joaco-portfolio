import { useState } from "react";
import Socials from "./Socials";

export default function Contact() {
    const [fields, setFields] = useState({
        firstname: "",
        email: "",
        message: ""
    });
    const [touched, setTouched] = useState({
        firstname: false,
        email: false,
        message: false
    });
    const [showModal, setShowModal] = useState(false);
    const [sentData, setSentData] = useState(null);

    const handleChange = (e) => {
        setFields({ ...fields, [e.target.id]: e.target.value });
    };

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.id]: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({ firstname: true, email: true, message: true });
        if (isValid.firstname && isValid.email && isValid.message) {
            console.log(fields);
            setSentData(fields);
            setShowModal(true);
            setFields({ firstname: '', email: '', message: '' });
            setTouched({ firstname: false, email: false, message: false });
        }
    };

    const isValid = {
        firstname: fields.firstname.trim().length > 0,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email),
        message: fields.message.trim().length > 0
    };

    const getInputClass = (field) => {
        return isValid[field]
            ? 'border-2 border-accent'
            : touched[field]
                ? 'border-2 border-red-500'
                : 'border border-gray-700';
    };

    const errorMsg = {
        firstname: 'First name is required.',
        email: 'Please enter a valid email address.',
        message: 'Message is required.'
    };

    return (
        <section id="contact" className='flex flex-col snap-start items-center justify-center h-auto w-screen md:gap-10 gap-2 px-5 py-0 p-4 md:p-10'>
            <h3 className='text-4xl font-bold text-primary drop-shadow-lg'>Do you want to work with me?</h3>
            <p className='text-lg text-gray-300 max-w-2xl text-center'>Are you seeking for a developer? I'm always looking for new projects and collaborations. If you have an idea or project in mind, feel free to contact me.</p>

            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full max-w-xl h-auto rounded-2xl p-10 gap-7 shadow-2xl bg-gray-950 border border-gray-800 backdrop-blur-md'>
                <h3 className="text-3xl font-bold uppercase text-primary tracking-wider mb-4">Contact</h3>

                <div className="w-full flex flex-col gap-1">
                    <input
                        type="text"
                        id="firstname"
                        placeholder='First Name'
                        className={`rounded-md text-text bg-gray-900 w-full p-4 transition-all duration-200 placeholder:text-gray-400 ${getInputClass('firstname')}`}
                        required
                        value={fields.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!isValid.firstname && touched.firstname && (
                        <span className="text-red-500 text-sm mt-1">{errorMsg.firstname}</span>
                    )}
                </div>

                <div className="w-full flex flex-col gap-1">
                    <input
                        type="text"
                        id="lastname"
                        placeholder='Last Name'
                        className='rounded-md text-text bg-gray-900 w-full p-4 border border-gray-700 transition-all duration-200 placeholder:text-gray-400'
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full flex flex-col gap-1">
                    <input
                        type="email"
                        id="email"
                        placeholder='Email'
                        className={`rounded-md text-text bg-gray-900 w-full p-4 transition-all duration-200 placeholder:text-gray-400 ${getInputClass('email')}`}
                        required
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!isValid.email && touched.email && (
                        <span className="text-red-500 text-sm mt-1">{errorMsg.email}</span>
                    )}
                </div>

                <div className="w-full flex flex-col gap-1">
                    <textarea
                        id="message"
                        placeholder='Message'
                        rows="5"
                        className={`rounded-md text-text bg-gray-900 w-full p-4 transition-all duration-200 placeholder:text-gray-400 resize-none ${getInputClass('message')}`}
                        required
                        value={fields.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!isValid.message && touched.message && (
                        <span className="text-red-500 text-sm mt-1">{errorMsg.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition duration-300 font-semibold"
                >
                    Send Request
                </button>
            </form>

            <p className="md:text-center text-pretty text-xs">Anyway, If you feel more comfortable, you can contact me through my email: <a href="mailto:joaquinfariasovelar2503@gmail.com" className="text-accent underline">joaquinfariasovelar2503@gmail.com</a></p>
            <p className="bottom-0 text-center text-xs">This proyect is hereby subjected to MIT license. &#169; 2025 Joaquín Farias Ovelar. </p>


            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-8 rounded-lg max-w-lg w-full mx-4">
                        <h3 className="text-2xl font-bold text-primary mb-4">Message Sent!</h3>
                        <p className="text-white mb-4">Your message has been sent. These are the details:</p>
                        <div className="bg-gray-800 p-4 rounded-lg mb-4">
                            <p className="text-gray-300"><strong>Name:</strong> {sentData.firstname}</p>
                            <p className="text-gray-300"><strong>Email:</strong> {sentData.email}</p>
                            <p className="text-gray-300"><strong>Message:</strong> {sentData.message}</p>
                        </div>
                        <button
                            onClick={() => setShowModal(false)}
                            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}