import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Mail, Award, Heart, Utensils, Sparkles, ChevronRight } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
];

const footerSections = [
  {
    title: 'Experience',
    links: [
      { name: 'Seasonal Menus', href: '#menu' },
      { name: 'Wine Selection', href: '#' },
      { name: 'Chef\'s Table', href: '#' },
      { name: 'Tasting Menu', href: '#' },
      { name: 'Private Events', href: '#events' }
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Reservations', href: '#reservations' },
      { name: 'Gift Certificates', href: '#' },
      { name: 'Corporate Events', href: '#' },
      { name: 'Catering', href: '#' },
      { name: 'Cooking Classes', href: '#' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { name: 'About Our Story', href: '#about' },
      { name: 'Meet the Team', href: '#' },
      { name: 'Press & Awards', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact Us', href: '#visit' }
    ]
  }
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#d6cec2_1px,transparent_0)] bg-[length:48px_48px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-secondary/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-4">
                <div className="mb-8">
                  <h2 className="font-serif text-5xl italic mb-4 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                    Lumière
                  </h2>
                  <p className="text-stone-300 text-lg leading-relaxed mb-6">
                    Where culinary artistry meets timeless elegance. Creating unforgettable dining experiences in the heart of New York.
                  </p>
                  
                  {/* Awards */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                      <Award size={16} className="text-accent" />
                      <span className="text-sm font-medium">Michelin Star 2025</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Social Links */}
                <div>
                  <h4 className="text-sm uppercase tracking-widest mb-4 text-stone-400 font-bold">
                    Follow Our Journey
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a 
                          key={social.label}
                          href={social.href} 
                          className={`group p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 hover:border-accent/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                          aria-label={social.label}
                        >
                          <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Links Sections */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {footerSections.map((section, index) => (
                    <div key={section.title}>
                      <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-stone-400">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <a 
                              href={link.href} 
                              className="group flex items-center text-stone-300 hover:text-white transition-colors duration-300 text-sm"
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-300">
                                {link.name}
                              </span>
                              <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Newsletter */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail size={20} className="text-accent" />
                    <h4 className="text-sm font-bold tracking-widest uppercase text-stone-400">
                      Newsletter
                    </h4>
                  </div>
                  
                  <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                    Be the first to know about seasonal menus, exclusive events, and culinary experiences.
                  </p>
                  
                  {!isSubscribed ? (
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <div className="relative">
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address" 
                          required
                          className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-accent focus:bg-white/20 text-sm placeholder-stone-400 transition-all duration-300"
                        />
                      </div>
                      <button 
                        type="submit"
                        disabled={isSubscribing}
                        className="w-full bg-accent hover:bg-accent/80 text-white px-4 py-3 text-sm font-bold tracking-wide uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50"
                      >
                        {isSubscribing ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Heart size={16} />
                            Subscribe
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-4">
                      <Sparkles size={24} className="text-accent mx-auto mb-2" />
                      <p className="text-accent font-medium">Welcome to our culinary family!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-stone-400">
                <p>&copy; 2025 Lumière Restaurant Group. All rights reserved.</p>
                <div className="hidden md:block w-px h-4 bg-stone-600"></div>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Utensils size={14} className="text-accent" />
                <span>Crafted with passion in New York</span>
              </div>
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
    </footer>
  );
};