import { useEffect, useRef, useState } from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Emmanuel',
    role: 'Technical Lead, Smart Contract Dev',
    description: `Full-stack developer who's built across web, mobile, and blockchain—now bringing that expertise to Arbitrum Stylus. As Technical Lead, he's implementing battle-tested smart contracts in Rust, ensuring every line of code is secure, optimized, and production-ready for developers worldwide.`,
    image: '/src/assets/team/1.jpg',
    github: 'https://github.com/BossEmma',
    twitter: 'https://x.com/BossEmmanuel03 ',
    linkedin: '#',
  },
  {
    name: 'Helen',
    role: 'Product Manager, Creative Strategist',
    description: `Product Manager and Creative Strategist who had her blockchain "aha moment" understanding decentralization. Now leading Kairo's documentation, creative strategy, and security mindset—making Rust contracts understandable while thinking like an attacker`,
    image: '/src/assets/team/2.jpg',
    github: 'https://github.com/helenijay',
    twitter: 'https://x.com/anideamaybe',
    linkedin: 'http://linkedin.com/in/ijeomaokezie',
  },
  {
    name: 'MTB',
    role: 'Full Stack Developer, Project Manager',
    description: `Full-Stack Developer and Project Manager wearing multiple hats at Kairo. Built the entire frontend experience, wrote the documentation, and manages developer communications. If it's not smart contracts, MTB created it.`,
    image: '/src/assets/team/3.jpg',
    github: 'https://github.com/taisekhame',
    twitter: 'https://x.com/mrtbaby_1',
    linkedin: 'https://www.linkedin.com/in/taiye-aisekhame/',
  },
  {
    name: 'Koliinx',
    role: 'Graphics Designer',
    description: `Graphic Designer crafting Kairo's complete visual experience. From brand identity and social graphics to landing page design and visual docs—making Rust contracts feel approachable through thoughtful design.`,
    image: '/src/assets/team/4.jpg',
    github: 'https://github.com/koliinxidodo',
    twitter: 'https://x.com/koliinx/',
    linkedin: 'https://www.linkedin.com/in/collins-idodo-883473365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

const Team = () => {
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
      id="team"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-[#A7B1C2] max-w-3xl mx-auto">
            A diverse group of experts passionate about making Arbitrum Stylus development
            accessible and secure for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`glassmorphic p-6 rounded-xl group hover:scale-105 transition-all duration-300 ${
                isVisible ? 'slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#213147] to-transparent opacity-60"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#28A0F0] font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-[#A7B1C2] mb-4 leading-relaxed">
                {member.description}
              </p>

              <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
                {member.github && (
                  <a
                    href={member.github}
                    className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors"
                    aria-label="GitHub"
                    target='_blank'
                  >
                    <Github size={20} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors"
                    aria-label="Twitter"
                    target='_blank'
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="text-[#A7B1C2] hover:text-[#28A0F0] transition-colors"
                    aria-label="LinkedIn"
                    target='_blank'
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
