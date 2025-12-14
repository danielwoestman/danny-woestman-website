import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HERO} className="min-h-screen pt-16 flex flex-col relative overflow-hidden bg-[#f2f2f2]">
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-[90vw] mx-auto text-center md:text-left">
          <p className="font-mono text-sm md:text-base text-gray-500 mb-4 uppercase tracking-widest">
            Based in Illinois
          </p>
          <h1 className="font-display font-bold text-[10vw] leading-[0.9] tracking-tighter text-black uppercase mb-6 mix-blend-multiply">
            Dr. Danny<br/>Woestman
          </h1>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mt-8 border-t border-black/10 pt-8">
            <p className="text-lg md:text-xl max-w-xl leading-relaxed">
              Superintendent of Schools dedicated to student success, fiscal responsibility, and community partnership. Over 15 years of executive leadership in public education.
            </p>
            <button 
              onClick={() => scrollToSection(SectionId.WORK)}
              className="group flex items-center gap-4 text-xl font-bold uppercase tracking-wide hover:opacity-60 transition-opacity"
            >
              View Experience
              <span className="bg-black text-white rounded-full p-2 group-hover:rotate-45 transition-transform duration-300">
                <ArrowDown size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="py-6 border-t border-b border-black overflow-hidden bg-white relative z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <span className="text-4xl md:text-6xl font-display font-bold uppercase text-black">
                Superintendent of Schools
              </span>
              <span className="mx-8 text-4xl text-orange-600 font-serif italic">
                &
              </span>
              <span className="text-4xl md:text-6xl font-display font-bold uppercase text-transparent text-outline" style={{WebkitTextStroke: '1px black'}}>
                Educational Leader
              </span>
              <span className="mx-8 text-2xl">●</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;