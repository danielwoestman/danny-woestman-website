import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id={SectionId.CONTACT} className="bg-white border-t border-black/10 pt-20 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
           <div>
             <h2 className="font-display text-[10vw] md:text-[8vw] leading-[0.8] font-bold uppercase text-black mb-8">
               Let's<br/>Talk.
             </h2>
             <a 
               href="mailto:danny@woestman.com" 
               className="inline-block text-2xl md:text-3xl font-mono border-b-2 border-black pb-1 hover:bg-black hover:text-white transition-all px-2 -ml-2"
             >
               danny@woestman.com
             </a>
           </div>

           <div className="flex flex-col justify-end items-start md:items-end">
              <div className="flex flex-col gap-4 text-lg font-medium uppercase tracking-wide">
                 <a href="#" className="hover:text-orange-600 transition-colors">LinkedIn</a>
                 <a href="#" className="hover:text-orange-600 transition-colors">Twitter / X</a>
              </div>
           </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-xs font-mono uppercase text-gray-500">
             © 2025 Dr. Danny Woestman. All Rights Reserved.
           </div>
           
           <button 
             onClick={scrollToTop}
             className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-orange-600 transition-colors"
           >
             Back to Top <ArrowUp size={14} />
           </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;