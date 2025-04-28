
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hannibal Janus P J</h3>
            <p className="text-gray-300 mb-4">
              B.Tech in AI & Data Science. Passionate about building innovative solutions and continuous learning.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hannibaljanus2003@gmail.com" className="text-white hover:text-teal transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/HannibalJanus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/hannibal-janus-p-j-976a82a4/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/HannibalJ2003" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-teal transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-teal transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-teal transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-teal transition-colors">Education</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <div className="flex items-start mb-2">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>21, Kailasapuram First Street, Ponmalai (Pondy), Tiruchirappalli-620004</span>
              </div>
              <p className="mt-2">
                <a href="tel:+919443319919" className="hover:text-teal transition-colors">+91 9443319919</a>
              </p>
              <p className="mt-2">
                <a href="mailto:hannibaljanus2003@gmail.com" className="hover:text-teal transition-colors">hannibaljanus2003@gmail.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Hannibal Janus P J. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
