import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Star, Coffee, ChevronRight } from 'lucide-react';

export const QuickInfo: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    // Check if cafe is open
    const hour = new Date().getHours();
    const isWeekend = [0, 6].includes(new Date().getDay()); // Sunday or Saturday
    
    if (isWeekend) {
      setIsOpen(hour >= 8 && hour < 22); // Open 8AM-10PM weekends
    } else {
      setIsOpen(hour >= 7 && hour < 21); // Open 7AM-9PM weekdays
    }

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const getHoursText = () => {
    const day = new Date().getDay();
    const isWeekend = [0, 6].includes(day);
    
    if (isWeekend) return "Open 8AM-10PM";
    return "Open 7AM-9PM";
  };

  return (
    <div className="hidden lg:flex bg-gradient-to-r from-secondary/20 via-cream to-accent/20 border-b border-secondary/30 backdrop-blur-sm py-3 px-6 justify-between items-center text-xs tracking-wide text-primary font-semibold z-50 relative shadow-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#F4D03F_1px,transparent_0)] bg-[length:16px_16px]"></div>
      </div>
      
      <div className="flex items-center space-x-8 relative z-10">
        <a 
          href="#visit" 
          className="group flex items-center gap-2 hover:text-accent transition-colors duration-300"
        >
          <MapPin size={16} className="text-accent group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:underline">123 Main Street, Your City</span>
          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Clock size={16} className="text-accent" />
            <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse ${
              isOpen ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
          </div>
          <span className="flex items-center gap-2">
            <span className={isOpen ? 'text-green-700 font-bold' : 'text-red-600 font-bold'}>
              {isOpen ? '☕ Open Now' : 'Closed'}
            </span>
            <span className="text-primary/60">•</span>
            <span>{getHoursText()}</span>
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-8 relative z-10">
        <a 
          href="tel:+15555551234" 
          className="group flex items-center gap-2 hover:text-accent transition-colors duration-300"
        >
          <Phone size={16} className="text-accent group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:underline">+1 (555) 555-1234</span>
        </a>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-secondary/20 px-4 py-1.5 rounded-full border border-secondary/40">
            <Star size={16} className="text-secondary fill-current animate-pulse" />
            <span className="text-primary font-black">Best Local Cafe 2024</span>
          </div>
          
          <div className="flex items-center gap-2 bg-accent/20 px-4 py-1.5 rounded-full border border-accent/40">
            <Coffee size={16} className="text-accent" />
            <span className="text-primary font-bold text-xs">Custom Cakes Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};