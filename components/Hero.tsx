import React from 'react';
import { ChevronDown, Coffee, Sparkles, Cake } from 'lucide-react';
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
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
          alt="Cozy Cafe Atmosphere"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-coffee-800/70 to-coffee-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Floating Coffee Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-secondary/40 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/50 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-secondary/30 rounded-full animate-float"></div>
        <Coffee className="absolute top-1/2 right-1/4 w-6 h-6 text-secondary/20 animate-float-delayed" />
        <Cake className="absolute bottom-1/4 right-1/3 w-5 h-5 text-accent/20 animate-float" />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <div className="space-y-8 max-w-5xl animate-fade-in-up">
          {/* Enhanced Award Badge */}
          <div className="flex justify-center mb-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/60 to-accent/60 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <span className="relative bg-secondary/20 backdrop-blur-lg border border-secondary/40 text-white px-6 py-3 rounded-full text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-secondary/30 transition-all duration-300">
                <Coffee size={18} className="text-secondary" />
                Freshly Brewed Since 2024
                <Sparkles size={16} className="text-accent animate-pulse" />
              </span>
            </div>
          </div>

          {/* Enhanced Logo with Gradient Text */}
          <div className="relative">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl bg-gradient-to-br from-secondary via-accent to-cream bg-clip-text text-transparent tracking-tight leading-none mb-4 drop-shadow-2xl font-bold">
              Suvan's Cafe
            </h1>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary/30 rounded-full blur-sm animate-pulse"></div>
          </div>

          {/* Enhanced Tagline */}
          <div className="relative">
            <p className="text-xl md:text-2xl text-cream/90 font-light tracking-wide max-w-3xl mx-auto mb-8 leading-relaxed">
              "Where every sip tells a story & every bite brings joy"
            </p>
            <p className="text-base md:text-lg text-secondary/80 font-medium max-w-2xl mx-auto">
              ☕ Premium Coffee • 🍰 Custom Cakes • 🥤 Refreshing Drinks • 🍪 Delicious Snacks
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          </div>

          {/* Enhanced Button Group */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={() => scrollToSection('reservations')}
              className="relative min-w-[240px] px-10 py-5 
             text-primary font-bold text-lg tracking-wide
             bg-gradient-to-r from-secondary to-accent rounded-full
             border-2 border-secondary/60
             overflow-hidden
             transition-all duration-400 ease-out
             hover:scale-105 hover:shadow-2xl hover:shadow-secondary/40
             group transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Coffee size={20} />
                Order Now
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                  bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  transition-transform duration-700 skew-x-12" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[240px] group backdrop-blur-sm border-2 border-secondary/60 text-cream hover:bg-secondary/20 hover:border-secondary hover:scale-105 transition-all duration-300 py-5 px-10 rounded-full font-semibold"
              onClick={() => scrollToSection('menu')}
            >
              <span className="flex items-center justify-center gap-2">
                <Cake size={20} />
                View Menu
              </span>
            </Button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer" onClick={() => scrollToSection('concept')}>
          <div className="text-secondary/80 text-xs uppercase tracking-widest mb-2 group-hover:text-secondary transition-colors font-semibold">
            Explore More
          </div>
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-secondary/70 group-hover:text-secondary transition-colors" />
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