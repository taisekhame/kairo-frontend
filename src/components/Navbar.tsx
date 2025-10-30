import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/kairo no bg.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="glass-effect fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl rounded-full z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group">
          <img src={logo} alt="Kairo Logo" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
          <span className="font-bold text-lg text-white hidden sm:inline">Kairo</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Team
          </button>
        </div>

        <a
          href="https://docs.kairo.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-button hidden md:block px-6 py-2 bg-[#28A0F0] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#28A0F0]/50 transition-all"
        >
          Start Building
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20 flex flex-col gap-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-white/80 hover:text-white transition-colors"
          >
            Team
          </button>
          <a
            href="https://docs.kairo.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-2 bg-[#28A0F0] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#28A0F0]/50 transition-all text-center"
          >
            Start Building
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
