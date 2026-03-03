import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Mail, Coffee, Heart, Cake, Sparkles, ChevronRight } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
];

const footerSections = [
  {
    title: 'Menu',
    links: [
      { name: 'Coffee & Drinks', href: '#menu' },
      { name: 'Fresh Snacks', href: '#' },
      { name: 'Custom Cakes', href: '#' },
      { name: 'Daily Specials', href: '#' },
      { name: 'Catering', href: '#events' }
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Order Online', href: '#reservations' },
      { name: 'Gift Cards', href: '#' },
      { name: 'Custom Cake Orders', href: '#' },
      { name: 'Party Catering', href: '#' },
      { name: 'Delivery', href: '#' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#' },
      { name: 'Join Our Team', href: '#' },
      { name: 'Reviews', href: '#' },
      { name: 'Visit Us', href: '#visit' }
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
    <footer className="bg-gradient-to-br from-primary via-coffee-900 to-primary text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#F4D03F_1px,transparent_0)] bg-[length:48px_48px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-4">
                <div className="mb-8">
                  <h2 className="font-serif text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Suvan's Cafe
                  </h2>
                  <p className="text-cream/80 text-lg leading-relaxed mb-6 font-medium">
                    Your neighborhood cafe where every cup tells a story and every moment is special. Serving the community with passion since 2024.
                  </p>
                  
                  {/* Awards */}
                  <div className="flex items-center gap-4 mb-6 flex-wrap">
                    <div className="flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/30">
                      <Coffee size={18} className="text-secondary" />
                      <span className="text-sm font-bold text-secondary">Best Local Cafe 2024</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Social Links */}
                <div>
                  <h4 className="text-sm uppercase tracking-widest mb-4 text-secondary font-bold">
                    Follow Our Journey
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a 
                          key={social.label}
                          href={social.href} 
                          className={`group p-3 bg-secondary/20 hover:bg-secondary/30 rounded-full border-2 border-secondary/30 hover:border-secondary transition-all duration-300 hover:scale-110 ${social.color}`}
                          aria-label={social.label}
                        >
                          <Icon size={22} className="text-secondary group-hover:scale-110 transition-transform duration-300" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Links Sections */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {footerSections.map((section, index) => (
                    <div key={section.title}>
                      <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-secondary">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <a 
                              href={link.href} 
                              className="group flex items-center text-cream/80 hover:text-secondary transition-colors duration-300 text-sm font-medium"
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-300">
                                {link.name}
                              </span>
                              <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-accent" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-secondary/20 bg-primary/30 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-cream/70 font-medium">
                <p>&copy; 2024 Suvan's Cafe. All rights reserved.</p>
                <div className="hidden md:block w-px h-4 bg-secondary/30"></div>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                  <span>•</span>
                  <a href="#" className="hover:text-secondary transition-colors">Accessibility</a>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-cream/70 font-medium">
                <Coffee size={16} className="text-secondary" />
                <span>Brewed with love ❤️</span>
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