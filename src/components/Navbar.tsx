import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphic shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white tracking-wider hover:text-gradient cursor-pointer transition-all">
              KAIRO
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#28A0F0] transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#28A0F0] transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-white hover:text-[#28A0F0] transition-colors duration-200 font-medium"
            >
              Team
            </button>
          </div>

          <div className="hidden md:block">
            <a
              href="https://docs.kairo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#28A0F0] text-white font-semibold rounded-lg glow-on-hover"
            >
              Start Building
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#28A0F0] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#213147]/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md"
            >
              Team
            </button>
            <a
              href="https://docs.kairo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-3 py-2 mt-2 bg-[#28A0F0] text-white font-semibold rounded-lg"
            >
              Start Building
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
