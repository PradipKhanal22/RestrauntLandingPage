import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['menu', 'about', 'gallery', 'events', 'visit'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom > 150;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Menu', id: 'menu' },
    { name: 'Philosophy', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Events', id: 'events' },
    { name: 'Visit', id: 'visit' },
  ];

  return (
    <>
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'top-0 bg-primary/80 backdrop-blur-xl py-3 shadow-2xl shadow-primary/10 border-b border-white/10 text-stone-100' 
            : 'top-0 md:top-8 bg-white/5 backdrop-blur-sm py-5 text-white border-b border-white/5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Enhanced Logo */}
          <a 
            href="#" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative font-serif text-3xl font-semibold tracking-wider italic hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Lumière</span>
            <Sparkles 
              size={16} 
              className="absolute -top-1 -right-4 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" 
            />
          </a>

          {/* Enhanced Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`relative text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer group ${
                  activeSection === link.id 
                    ? 'text-accent' 
                    : 'hover:text-secondary'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <div className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-accent to-transparent transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-2/3'
                }`}></div>
              </a>
            ))}
          </div>

          {/* Enhanced CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Button 
                variant={isScrolled ? 'secondary' : 'outline'} 
                size="sm"
                onClick={(e) => scrollToSection(e, 'reservations')}
                className="relative overflow-hidden"
              >
                Reserve
              </Button>
            </div>
            
            <button 
              className={`md:hidden p-3 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                isMobileMenuOpen ? 'bg-white/20' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Background Blur */}
        <div 
          className={`absolute inset-0 bg-primary/95 backdrop-blur-xl transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div 
          className={`relative h-full flex flex-col items-center justify-center transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link, index) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="group font-serif text-4xl text-secondary hover:text-white italic cursor-pointer transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative">
                  {link.name}
                  <div className="absolute -bottom-2 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500"></div>
                </span>
              </a>
            ))}
            <div className="pt-12">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={(e) => scrollToSection(e, 'reservations')}
                className="transform hover:scale-105 transition-all duration-300"
              >
                Reserve a Table
              </Button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
};