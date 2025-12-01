import React from 'react';
import { Button } from './Button';
import { Users, Calendar, Heart, Sparkles, Award } from 'lucide-react';

const eventSpaces = [
  {
    icon: Users,
    title: "Chef's Table",
    capacity: "6-8 guests",
    description: "Front-row seats to culinary artistry"
  },
  {
    icon: Heart,
    title: "Wine Cellar",
    capacity: "12-16 guests",
    description: "Intimate dining among our finest vintages"
  },
  {
    icon: Award,
    title: "Full Buyout",
    capacity: "Up to 100 guests",
    description: "The entire restaurant for your exclusive event"
  }
];

export const PrivateEvents: React.FC = () => {
  return (
    <section id="events" className="relative py-40 flex items-center justify-center overflow-hidden scroll-mt-28">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
          alt="Private Dining" 
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-stone-900/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-accent/20 rounded-full animate-float"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Enhanced Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-accent mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium flex items-center gap-2">
              <Sparkles size={16} className="text-accent" />
              Private Events
            </span>
            <div className="h-px w-16 bg-accent ml-4"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 italic bg-gradient-to-br from-white via-secondary to-white bg-clip-text text-transparent leading-tight">
            Host an Unforgettable Evening
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-stone-200 mb-12 font-light leading-relaxed">
            From intimate celebrations in our Wine Cellar to full buyouts for up to 100 guests, 
            Lumière offers a bespoke backdrop for your most cherished moments.
          </p>
        </div>

        {/* Event Spaces Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventSpaces.map((space, index) => {
            const Icon = space.icon;
            return (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-accent/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 group-hover:bg-accent/30 transition-all duration-300">
                    <Icon size={24} className="text-accent" />
                  </div>
                </div>
                <h3 className="font-serif text-xl mb-2 italic">
                  {space.title}
                </h3>
                <p className="text-accent font-medium mb-3 text-sm uppercase tracking-wider">
                  {space.capacity}
                </p>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {space.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <p className="text-stone-300 italic mb-4">
              "Every celebration deserves the perfect setting"
            </p>
            <div className="flex justify-center items-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Sparkles key={star} size={16} className="text-accent fill-current animate-pulse" style={{ animationDelay: `${star * 200}ms` }} />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="min-w-[220px] group relative overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar size={18} />
                Inquire About Events
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="min-w-[220px] text-stone-300 hover:text-white"
            >
              View Event Gallery
            </Button>
          </div>
          
          <p className="text-stone-400 text-sm mt-6">
            Contact our events team at events@lumiere.com or call (555) 123-4567
          </p>
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
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};