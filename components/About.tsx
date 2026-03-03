import React from 'react';
import { Award, Users, Clock, Heart, Coffee } from 'lucide-react';

const stats = [
  { icon: Coffee, label: 'Cups Served Daily', value: '500+' },
  { icon: Users, label: 'Happy Customers', value: '15K+' },
  { icon: Clock, label: 'Years of Excellence', value: '2+' },
  { icon: Heart, label: 'Custom Cakes Made', value: '1000+' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-primary via-coffee-900 to-primary text-cream overflow-hidden scroll-mt-28 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#F4D03F_1px,transparent_0)] bg-[length:64px_64px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Enhanced Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Section Tag */}
            <div className="flex items-center mb-8">
              <div className="h-px w-12 bg-secondary mr-4"></div>
              <span className="text-secondary text-sm uppercase tracking-widest font-bold flex items-center gap-2">
                <Coffee size={16} />
                Our Story
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-bold">
              "Brewing happiness,<br/>one cup at a time."
            </h2>
            
            {/* Content Paragraphs */}
            <div className="space-y-8 text-cream/90 font-light leading-relaxed text-lg">
              <p className="relative">
                Founded by <span className="text-secondary font-bold">Suvan Patel</span> in 2024, Suvan's Cafe was born from a passion for bringing people together over exceptional coffee and delicious treats. We believe that every visit should feel like coming home, where the aroma of freshly brewed coffee welcomes you and every bite brings a smile.
              </p>
              <p>
                From our <span className="text-accent font-semibold">locally-sourced premium coffee beans</span> to our freshly baked goods made daily, we're committed to quality and authenticity. Our custom cake service has become a neighborhood favorite, turning celebrations into unforgettable memories with personalized creations made just for you.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 my-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group p-6 bg-secondary/10 backdrop-blur-sm rounded-xl border border-secondary/20 hover:border-secondary/50 hover:bg-secondary/15 transition-all duration-300">
                    <Icon size={28} className="text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                    <div className="text-sm text-cream/80 uppercase tracking-wider font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            {/* Founder Message */}
            <div className="mt-12 p-8 bg-secondary/10 backdrop-blur-sm rounded-xl border border-secondary/30 hover:border-secondary/50 transition-all duration-300">
              <div className="text-secondary font-serif text-5xl mb-4 italic">"</div>
              <p className="text-cream/90 text-base leading-relaxed mb-6 italic">
                At Suvan's Cafe, we don't just serve coffee and cakes – we create experiences. Every customer is family, and every order is made with love and attention to detail.
              </p>
              <div className="border-t border-secondary/30 pt-4">
                <p className="text-sm text-secondary uppercase tracking-widest font-bold">Suvan Patel</p>
                <p className="text-xs text-cream/70 mt-1 italic">Founder & Head Barista</p>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            {/* Main Image Container */}
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1287&auto=format&fit=crop" 
                  alt="Coffee and Cafe Atmosphere" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-secondary/30 rounded-2xl z-0"></div>
              <div className="absolute top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 z-20">
              <div className="bg-gradient-to-r from-secondary to-accent text-primary px-6 py-3 rounded-full shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-xs uppercase tracking-wider font-black">Est. 2024</div>
              </div>
            </div>
            
            {/* Additional Decorative Image */}
            <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-secondary/40">
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1287&auto=format&fit=crop" 
                alt="Coffee Cup Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};