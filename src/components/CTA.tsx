import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, Code, Users } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`glassmorphic rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden ${
            isVisible ? 'fade-in' : 'opacity-0'
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-[#28A0F0] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#96BEDC] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join the Next Generation of
              <br />
              <span className="text-gradient">Stylus Developers</span>
            </h2>

            <p className="text-xl text-[#A7B1C2] max-w-3xl mx-auto mb-12 leading-relaxed">
              Start building with Kairo today and join a community of developers pushing the
              boundaries of what's possible on Arbitrum Stylus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="https://kairo-docs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#28A0F0] text-white font-semibold rounded-lg glow-on-hover flex items-center gap-2"
              >
                Start Building
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/Team-Oracle/Kairo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg glow-on-hover"
              >
                View on GitHub
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#28A0F0]/20 rounded-full mb-4">
                  <BookOpen size={32} className="text-[#28A0F0]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Documentation</h3>
                <p className="text-[#A7B1C2]">
                  Comprehensive guides and API references
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#28A0F0]/20 rounded-full mb-4">
                  <Code size={32} className="text-[#28A0F0]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Examples</h3>
                <p className="text-[#A7B1C2]">
                  Production-ready code templates
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#28A0F0]/20 rounded-full mb-4">
                  <Users size={32} className="text-[#28A0F0]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Community</h3>
                <p className="text-[#A7B1C2]">
                  Active Discord and developer forums
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
