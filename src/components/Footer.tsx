import { Github, Twitter, ExternalLink } from 'lucide-react';
import logo from '../assets/kairo no bg.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Kairo Logo" className="w-8 h-8 object-contain" />
              <h3 className="text-2xl font-bold text-white">Kairo</h3>
            </div>
            <p className="text-[#A7B1C2] mb-4 max-w-md">
              The OpenZeppelin of Rust. Building secure, reusable smart contract templates
              for Arbitrum Stylus developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Team-Oracle/Kairo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://x.com/arb_kairo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://kairo-docs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors flex items-center gap-1"
                >
                  Documentation
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Team-Oracle/Kairo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors flex items-center gap-1"
                >
                  GitHub
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.arbitrum.io/stylus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors flex items-center gap-1"
                >
                  Arbitrum Stylus
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#A7B1C2] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kairo. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
