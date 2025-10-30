import { ArrowRight, Code2, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8 fade-in">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="glassmorphic p-4 rounded-lg animate-pulse">
              <Code2 size={32} className="text-[#28A0F0]" />
            </div>
            <div className="glassmorphic p-4 rounded-lg animate-pulse delay-100">
              <Shield size={32} className="text-[#96BEDC]" />
            </div>
            <div className="glassmorphic p-4 rounded-lg animate-pulse delay-200">
              <Zap size={32} className="text-[#28A0F0]" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Build Faster. Build Safer.
            <br />
            <span className="text-gradient">Build with Kairo</span>
            <br />
            <span className="text-[#96BEDC] text-4xl sm:text-5xl lg:text-6xl">
              on Arbitrum Stylus
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#A7B1C2] max-w-4xl mx-auto leading-relaxed">
            The OpenZeppelin of Rust — secure, reusable, and optimized smart contract templates
            for Arbitrum Stylus developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToAbout}
              className="glow-button group px-8 py-3 bg-[#28A0F0] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#28A0F0]/50 transition-all flex items-center gap-2"
            >
              Explore the Library
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/kairo-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#28A0F0]/50 text-white font-semibold rounded-full hover:bg-[#28A0F0]/10 hover:border-[#28A0F0] transition-all"
            >
              View on GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="glassmorphic p-6 rounded-xl slide-up">
              <Code2 size={40} className="text-[#28A0F0] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Rust-Native</h3>
              <p className="text-[#A7B1C2]">Built specifically for Arbitrum Stylus with Rust efficiency</p>
            </div>
            <div className="glassmorphic p-6 rounded-xl slide-up" style={{ animationDelay: '0.1s' }}>
              <Shield size={40} className="text-[#28A0F0] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Battle-Tested</h3>
              <p className="text-[#A7B1C2]">Secure, audited templates you can trust</p>
            </div>
            <div className="glassmorphic p-6 rounded-xl slide-up" style={{ animationDelay: '0.2s' }}>
              <Zap size={40} className="text-[#28A0F0] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-[#A7B1C2]">Optimized for maximum performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
