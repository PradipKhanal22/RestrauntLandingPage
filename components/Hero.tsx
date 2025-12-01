import React from 'react';
import { ChevronDown, Award, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Atmosphere" 
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-stone-900/60 to-stone-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-secondary/20 rounded-full animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <div className="space-y-8 max-w-5xl animate-fade-in-up">
          {/* Enhanced Award Badge */}
          <div className="flex justify-center mb-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-secondary/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative bg-white/10 backdrop-blur-lg border border-white/30 text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white/20 transition-all duration-300">
                <Award size={16} className="text-accent" />
                Best New Restaurant 2025
                <Sparkles size={14} className="text-secondary animate-pulse" />
              </span>
            </div>
          </div>

          {/* Enhanced Logo with Gradient Text */}
          <div className="relative">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl bg-gradient-to-br from-white via-secondary to-white bg-clip-text text-transparent italic tracking-tighter leading-none mb-4 drop-shadow-2xl">
              Lumière
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full blur-sm animate-pulse"></div>
          </div>

          {/* Enhanced Tagline */}
          <div className="relative">
            <p className="text-lg md:text-xl text-stone-200 font-light tracking-wide max-w-3xl mx-auto mb-8 font-serif italic leading-relaxed">
              "An intimate convergence of seasonal flavors, artistry, and timeless elegance."
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>

          {/* Enhanced Button Group */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="min-w-[220px] group relative overflow-hidden" 
              onClick={() => scrollToSection('reservations')}
            >
              <span className="relative z-10">Reserve a Table</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[220px] group backdrop-blur-sm" 
              onClick={() => scrollToSection('menu')}
            >
              <span>View Menus</span>
            </Button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer" onClick={() => scrollToSection('concept')}>
          <div className="text-white/60 text-xs uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">
            Discover
          </div>
          <div className="animate-bounce">
            <ChevronDown size={28} className="text-white/50 group-hover:text-white/70 transition-colors" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.15); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};