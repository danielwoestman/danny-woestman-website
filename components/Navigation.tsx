import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface NavigationProps {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.WORK, label: 'Experience' },
    { id: SectionId.CHAT, label: 'Ask AI' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f2f2f2] border-b border-black/10 px-4 md:px-8 h-16 flex justify-between items-center">
        <div 
          className="font-display font-bold text-lg tracking-tight uppercase cursor-pointer z-50"
          onClick={() => scrollToSection(SectionId.HERO)}
        >
          Dr. Danny Woestman
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium uppercase tracking-wider transition-all duration-200 relative group ${
                activeSection === link.id ? 'text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-black transform origin-left transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-black z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Overlay */}
        <div 
          className={`fixed inset-0 bg-[#f2f2f2] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden z-40 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="font-display text-4xl font-bold uppercase text-black hover:text-orange-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;