import { useEffect, useRef, useState } from 'react';
import { Package, Lock, Layers, GitBranch } from 'lucide-react';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What is <span className="text-gradient">Kairo</span>?
            </h2>

            <p className="text-lg text-[#A7B1C2] leading-relaxed">
              Kairo is a secure, open-source Rust library for Arbitrum Stylus, providing prebuilt
              implementations of ERC20, ERC721, and access control contracts — helping developers
              save time, reduce risk, and accelerate innovation.
            </p>

            <p className="text-lg text-[#A7B1C2] leading-relaxed">
              Just as OpenZeppelin became the standard for Solidity development, Kairo aims to be
              the go-to library for Rust developers building on Arbitrum Stylus. We provide
              battle-tested, auditable smart contract templates that follow best practices and
              security standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="glassmorphic p-4 rounded-lg">
                <Package size={32} className="text-[#28A0F0] mb-2" />
                <h4 className="text-white font-semibold mb-1">Prebuilt Templates</h4>
                <p className="text-sm text-[#A7B1C2]">Ready-to-use contract implementations</p>
              </div>
              <div className="glassmorphic p-4 rounded-lg">
                <Lock size={32} className="text-[#28A0F0] mb-2" />
                <h4 className="text-white font-semibold mb-1">Security First</h4>
                <p className="text-sm text-[#A7B1C2]">Audited and tested thoroughly</p>
              </div>
              <div className="glassmorphic p-4 rounded-lg">
                <Layers size={32} className="text-[#28A0F0] mb-2" />
                <h4 className="text-white font-semibold mb-1">Modular Design</h4>
                <p className="text-sm text-[#A7B1C2]">Mix and match components</p>
              </div>
              <div className="glassmorphic p-4 rounded-lg">
                <GitBranch size={32} className="text-[#28A0F0] mb-2" />
                <h4 className="text-white font-semibold mb-1">Open Source</h4>
                <p className="text-sm text-[#A7B1C2]">Community-driven development</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glassmorphic p-8 rounded-2xl">
              <div className="bg-[#213147] rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="text-[#96BEDC] mb-4">// Quick Start Example</div>
                <div className="text-[#A7B1C2]">
                  <span className="text-[#28A0F0]">use</span> kairo::token::erc20::ERC20;
                </div>
                <div className="text-[#A7B1C2] mt-2">
                  <span className="text-[#28A0F0]">use</span> kairo::access::ownable::Ownable;
                </div>
                <div className="mt-4 text-[#A7B1C2]">
                  <span className="text-[#28A0F0]">#[contract]</span>
                </div>
                <div className="text-[#A7B1C2]">
                  <span className="text-[#28A0F0]">pub struct</span> <span className="text-white">MyToken</span> {"{"}
                </div>
                <div className="text-[#A7B1C2] ml-4">
                  erc20: ERC20,
                </div>
                <div className="text-[#A7B1C2] ml-4">
                  ownable: Ownable,
                </div>
                <div className="text-[#A7B1C2]">{"}"}</div>
                <div className="mt-4 text-[#96BEDC]">// That's it! 🎉</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#28A0F0] rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#96BEDC] rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
