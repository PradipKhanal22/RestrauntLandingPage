import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Michelin Recognition', value: '2025' },
  { icon: Users, label: 'Guests Served', value: '10K+' },
  { icon: Clock, label: 'Years of Excellence', value: '1' },
  { icon: Heart, label: 'Farm Partners', value: '40' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-primary text-stone-100 overflow-hidden scroll-mt-28 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#d6cec2_1px,transparent_0)] bg-[length:64px_64px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Enhanced Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Section Tag */}
            <div className="flex items-center mb-8">
              <div className="h-px w-12 bg-accent mr-4"></div>
              <span className="text-accent text-sm uppercase tracking-widest font-medium">Our Philosophy</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight italic bg-gradient-to-r from-stone-100 to-secondary bg-clip-text text-transparent">
              "Honoring the ingredients,<br/>elevating the moment."
            </h2>
            
            {/* Content Paragraphs */}
            <div className="space-y-8 text-stone-300 font-light leading-relaxed text-lg">
              <p className="relative">
                Founded by <span className="text-secondary font-medium">Chef Elena Vance</span> in 2025, Lumière represents a return to the roots of culinary artistry. We believe that true luxury lies in simplicity and provenance. Our kitchen works directly with <span className="text-accent font-medium">forty small-scale farms</span> within a 100-mile radius, ensuring that every plate tells a story of the season.
              </p>
              <p>
                The dining room, designed by <span className="text-secondary font-medium">Studio Océan</span>, reflects this ethos—natural materials, soft lighting, and an atmosphere that invites you to slow down and savor. From our wood-fired hearth to our zero-waste cocktail program, every detail is intentional.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 my-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300">
                    <Icon size={24} className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-stone-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            {/* Chef Signature */}
            <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <img 
                src="https://imgs.search.brave.com/1cfZYGQO-DhkJKlouxShaqU0w7RAs63yc2PI7-kB0qw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ubHRh/c3RlLmNvbS9jZG4v/c2hvcC9maWxlcy9O/ZXh0X0xldmVsMTc1/NjNfMjZlNjE5Y2Ut/OGExNy00YjUyLWI5/ZjYtMjJkNzAzOTM1/Nzc0LmpwZz92PTE3/NDEzNjUxNDcmd2lk/dGg9MTQ0NQ" 
                alt="Chef Signature" 
                className="h-14 invert opacity-80 mb-4" 
              />
              <p className="text-sm text-stone-400 uppercase tracking-widest">Executive Chef Elena Vance</p>
              <p className="text-xs text-stone-500 mt-1 italic">Culinary Institute of America, French Laundry Alumni</p>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            {/* Main Image Container */}
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2577&auto=format&fit=crop" 
                  alt="Chef Plating" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-accent/20 rounded-2xl z-0"></div>
              <div className="absolute top-8 -left-8 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 z-20">
              <div className="bg-accent text-white px-6 py-3 rounded-full shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-xs uppercase tracking-wider font-bold">Est. 2025</div>
              </div>
            </div>
            
            {/* Additional Decorative Image */}
            <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-xl overflow-hidden shadow-xl z-20 border-4 border-white/20">
              <img 
                src="https://imgs.search.brave.com/DBnrvk56K6VawdtU5Zlih9DqGzsyyA8YxALsCDWcnPM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NTMyNTk2NS9waG90/by9lbXB0eS13aGl0/ZS1tYXJibGUta2l0/Y2hlbi1jb3VudGVy/dG9wLWluLW1vZGVy/bi1raXRjaGVuLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1T/dXozLW55dUxmaFVv/N3Z3NW9fQ0dWeHdi/WGxiOG0wRUF6VUU5/SUlSSlVRPQ" 
                alt="Kitchen Detail" 
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