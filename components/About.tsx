import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="bg-white border-b border-black/10">
      <div className="grid md:grid-cols-2">
        
        {/* Left Column: Image/Stats */}
        <div className="bg-gray-100 p-8 md:p-16 flex flex-col justify-between min-h-[600px] border-b md:border-b-0 md:border-r border-black/10 relative overflow-hidden group">
            <img 
               src="./profile.jpg" 
               alt="Dr. Danny Woestman" 
               className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
               onError={(e) => {
                 e.currentTarget.src = "https://picsum.photos/seed/university_library/1000/1200?grayscale";
               }}
            />
            <div className="relative z-10">
              <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest">
                Educational Leadership
              </span>
            </div>
            <div className="relative z-10 text-white">
               <p className="text-6xl font-display font-bold">15+</p>
               <p className="text-sm font-mono uppercase tracking-widest opacity-80">Years Executive Experience</p>
            </div>
        </div>

        {/* Right Column: Content */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-8 leading-none">
            Strategic Vision.<br/>
            <span className="text-gray-400">Community Focus.</span>
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-800 font-light">
            <p>
              I am Dr. Danny Woestman, currently serving as the Superintendent of Schools for Warren Township High School District. My career is defined by a commitment to academic excellence, operational efficiency, and fostering inclusive learning environments.
            </p>
            <p>
              From implementing strategic staffing reforms to overseeing significant facility improvements like new technology centers and stadium upgrades, I believe in building infrastructure that supports student achievement.
            </p>
            <p>
              I have consistently worked to help support new long term financial health and stability, negotiate complex union contracts, and achieve national certifications such as "Great Place to Work" and "High Reliability District" status.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
             <div>
               <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Education</h4>
               <ul className="space-y-2 font-mono text-sm text-gray-600">
                 <li>Ed.D. Leadership (NIU)</li>
                 <li>M.Ed. Leadership (Cincinnati)</li>
                 <li>B.A. English Teaching (BYU)</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Core Competencies</h4>
               <ul className="space-y-2 font-mono text-sm text-gray-600">
                 <li>Strategic Planning</li>
                 <li>Collective Bargaining</li>
                 <li>Facility Management</li>
                 <li>Community Relations</li>
               </ul>
             </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;