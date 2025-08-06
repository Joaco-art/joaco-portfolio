import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Socials() {
    return (
            <div className="flex flex-row md:gap-6 gap-4 text-xl md:text-4xl">
                <a href="https://www.linkedin.com/in/juan-garcia-dev/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/juan-garcia-dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="GitHub">
                    <FaGithub />
                </a>
                <a href="https://instagram.com/juan.garcia.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://x.com/juan_garcia_dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="X (Twitter)">
                    <FaTwitter />
                </a>
                <a href="https://www.upwork.com/freelancers/~juan-garcia-dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="UpWork">
                    <SiUpwork />
                </a>
            </div>
    )
}