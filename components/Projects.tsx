import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionId, Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Superintendent of Schools',
    category: 'Warren Township HSD',
    description: 'Implemented strategic plan with 40+ student facilitators, created Dual Language department, and helped support new long term financial health and stability.',
    year: '2022-Present',
    link: '#',
    image: '/warren-hs-illustration.png'
  },
  {
    id: '2',
    title: 'Superintendent of Schools',
    category: 'Belvidere CUSD',
    description: 'Achieved "Great Place to Work" certification, oversaw Advanced Technology Center construction, and increased graduation rates.',
    year: '2016-2022',
    link: '#',
    image: 'https://picsum.photos/seed/classroom_technology/800/600'
  },
  {
    id: '3',
    title: 'Asst. Superintendent',
    category: 'Rockford Public Schools',
    description: 'Chief Quality Officer overseeing #1 ranked middle school, strategic planning, and process improvement across all departments.',
    year: '2013-2016',
    link: '#',
    image: 'https://picsum.photos/seed/student_learning/800/600'
  },
  {
    id: '4',
    title: 'Assistant Principal',
    category: 'Hononegah Community HS',
    description: 'Supervised curricular teams, AP testing growth, and compliance reporting. Leadership in academic intervention programs.',
    year: '2008-2011',
    link: '#',
    image: 'https://picsum.photos/seed/books_library/800/600'
  }
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id={SectionId.WORK} className="bg-[#f2f2f2] py-24 px-4 md:px-8 border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Career History
          </h2>
          <p className="max-w-xs text-sm text-gray-600 font-mono">
            A timeline of executive leadership roles and key achievements in Illinois public education.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative border-t border-black/10 hover:border-black/100 transition-colors duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 py-12 items-center gap-6 cursor-default">
                
                {/* Year */}
                <div className="md:col-span-2 text-sm font-mono text-gray-500 group-hover:text-black transition-colors">
                  {project.year}
                </div>

                {/* Title */}
                <div className="md:col-span-5">
                   <h3 className="font-display text-2xl md:text-4xl font-bold uppercase text-black group-hover:translate-x-2 transition-transform duration-300">
                     {project.title}
                   </h3>
                   <p className="text-orange-600 font-serif italic text-xl mt-1">{project.category}</p>
                </div>

                {/* Description */}
                <div className="md:col-span-4 flex flex-col justify-center">
                   <p className="text-gray-500 group-hover:text-black transition-colors text-sm leading-relaxed">
                     {project.description}
                   </p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                   <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                     <ArrowUpRight size={18} />
                   </div>
                </div>

              </div>
              
              {/* Hover Image Reveal (Desktop) */}
              <div 
                className={`hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[250px] pointer-events-none z-10 transition-all duration-500 ease-out overflow-hidden rounded-sm bg-gray-200 ${
                  hoveredProject === project.id ? 'opacity-100 scale-100 rotate-2' : 'opacity-0 scale-90 rotate-0'
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover mix-blend-multiply" 
                  onError={(e) => {
                    // Fallback to a red brick school building if local file is missing
                    // This ensures it still looks like Warren HS even if the file isn't uploaded yet
                    e.currentTarget.src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>

            </div>
          ))}
          <div className="border-t border-black/10"></div>
        </div>

      </div>
    </section>
  );
};

export default Projects;