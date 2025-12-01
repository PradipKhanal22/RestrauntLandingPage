import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Star, Award, ChevronRight } from 'lucide-react';

export const QuickInfo: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    // Check if restaurant is open
    const hour = new Date().getHours();
    const isWeekend = [0, 6].includes(new Date().getDay()); // Sunday or Saturday
    
    if (isWeekend) {
      setIsOpen((hour >= 10 && hour < 14) || (hour >= 17 && hour < 23)); // Brunch 10-2, Dinner 5-11
    } else {
      setIsOpen(hour >= 17 && hour < 22); // Dinner 5-10 weekdays
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
    
    if (day === 1) return "Closed Today";
    if (isWeekend) return "Brunch 10AM-2PM, Dinner 5PM-11PM";
    return "Dinner 5PM-10PM";
  };

  return (
    <div className="hidden lg:flex bg-gradient-to-r from-stone-100 via-white to-stone-100 border-b border-stone-200/50 backdrop-blur-sm py-3 px-6 justify-between items-center text-xs tracking-wide text-stone-600 font-medium z-50 relative shadow-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#0f2f24_1px,transparent_0)] bg-[length:16px_16px]"></div>
      </div>
      
      <div className="flex items-center space-x-8 relative z-10">
        <a 
          href="#visit" 
          className="group flex items-center gap-2 hover:text-primary transition-colors duration-300"
        >
          <MapPin size={14} className="text-accent group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:underline">142 Fifth Avenue, New York, NY</span>
          <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Clock size={14} className="text-accent" />
            <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse ${
              isOpen ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
          </div>
          <span className="flex items-center gap-2">
            <span className={isOpen ? 'text-green-700 font-semibold' : 'text-red-600 font-semibold'}>
              {isOpen ? 'Open Now' : 'Closed'}
            </span>
            <span className="text-stone-400">•</span>
            <span>{getHoursText()}</span>
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-8 relative z-10">
        <a 
          href="tel:+12125550199" 
          className="group flex items-center gap-2 hover:text-accent transition-colors duration-300"
        >
          <Phone size={14} className="text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="group-hover:underline">+1 (212) 555-0199</span>
        </a>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            <Star size={14} className="text-accent fill-current animate-pulse" />
            <span className="text-accent font-bold">Michelin Star 2025</span>
          </div>
          
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <Award size={14} className="text-primary" />
            <span className="text-primary font-semibold text-xs">Best New Restaurant</span>
          </div>
        </div>
      </div>
    </div>
  );
};