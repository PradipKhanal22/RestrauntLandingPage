import React from 'react';
import { Button } from './Button';
import { Users, Calendar, Heart, Sparkles, Award } from 'lucide-react';

const eventSpaces = [
  {
    icon: Users,
    title: "Birthday Parties",
    capacity: "10-30 guests",
    description: "Custom cakes and catering for your special day"
  },
  {
    icon: Heart,
    title: "Small Gatherings",
    capacity: "5-15 guests",
    description: "Perfect for meetings or casual get-togethers"
  },
  {
    icon: Award,
    title: "Corporate Events",
    capacity: "Up to 50 guests",
    description: "Coffee catering and meeting spaces available"
  }
];

export const PrivateEvents: React.FC = () => {
  return (
    <section id="events" className="relative py-40 flex items-center justify-center overflow-hidden scroll-mt-28">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464349095431-e9a21285b2bc?q=80&w=1287&auto=format&fit=crop" 
          alt="Cafe Party" 
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-coffee-900/70 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
            <div className="h-px w-16 bg-secondary mr-4"></div>
            <span className="text-secondary text-sm uppercase tracking-widest font-bold flex items-center gap-2">
              <Sparkles size={18} className="text-secondary" />
              Events & Catering
            </span>
            <div className="h-px w-16 bg-secondary ml-4"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 font-bold bg-gradient-to-br from-secondary via-accent to-cream bg-clip-text text-transparent leading-tight">
            Celebrate With Suvan's Cafe
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-cream mb-12 font-medium leading-relaxed">
            From birthday parties to corporate events, we make every gathering special with our delicious coffee, 
            custom cakes, and catering services for groups of all sizes.
          </p>
        </div>

        {/* Event Spaces Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventSpaces.map((space, index) => {
            const Icon = space.icon;
            return (
              <div 
                key={index}
                className="group bg-secondary/20 backdrop-blur-md border-2 border-secondary/40 rounded-2xl p-8 hover:bg-secondary/30 hover:border-secondary transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <div className="inline-flex p-4 bg-secondary/30 backdrop-blur-sm rounded-full border-2 border-secondary/50 group-hover:bg-secondary/40 transition-all duration-300">
                    <Icon size={28} className="text-secondary" />
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2 font-bold text-secondary">
                  {space.title}
                </h3>
                <p className="text-accent font-bold mb-3 text-sm uppercase tracking-wider">
                  {space.capacity}
                </p>
                <p className="text-cream text-base leading-relaxed font-medium">
                  {space.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <p className="text-cream font-bold italic mb-4">
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
              className="min-w-[220px] text-cream font-semibold hover:text-secondary"
            >
              View Event Gallery
            </Button>
          </div>
          
          <p className="text-cream/80 font-medium text-sm mt-6">
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