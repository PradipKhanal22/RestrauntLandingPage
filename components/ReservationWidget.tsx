import React, { useState } from 'react';
import { Button } from './Button';
import { Calendar, Users, Clock, ChefHat, Coffee, Wine, Crown } from 'lucide-react';

const experiences = [
  { name: 'Dine In', icon: Coffee, description: 'Enjoy in our cozy cafe' },
  { name: 'Takeout', icon: ChefHat, description: 'Quick grab & go service' },
  { name: 'Custom Cake', icon: Crown, description: 'Order a personalized cake' },
  { name: 'Catering', icon: Users, description: 'Events & large orders' }
];

export const ReservationWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dine In');
  const [date, setDate] = useState('2025-12-01');
  const [guests, setGuests] = useState('2');
  const [time, setTime] = useState('7:00 PM');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle reservation logic here
    }, 2000);
  };

  const activeExperience = experiences.find(exp => exp.name === activeTab);

  return (
    <section id="reservations" className="py-32 bg-gradient-to-b from-cream to-white relative scroll-mt-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Floating Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 max-w-6xl mx-auto -mt-16 md:-mt-32 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#0f2f24_1px,transparent_0)] bg-[length:32px_32px]"></div>
          </div>
          
          <div className="relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-accent mr-4"></div>
                <span className="text-accent text-sm uppercase tracking-widest font-medium">
                  Reservations
                </span>
                <div className="h-px w-12 bg-accent ml-4"></div>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4 italic">
                Book Your Table
              </h2>
              <p className="text-primary font-semibold text-lg max-w-2xl mx-auto">
                Come enjoy great coffee, fresh food, and friendly service at Suvan's Cafe
              </p>
            </div>

            {/* Enhanced Experience Tabs */}
            <div className="mb-10">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {experiences.map((exp) => {
                  const Icon = exp.icon;
                  return (
                    <button
                      key={exp.name}
                      onClick={() => setActiveTab(exp.name)}
                      className={`group flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-300 min-w-[140px] ${
                        activeTab === exp.name 
                          ? 'border-accent bg-accent/5 text-accent shadow-lg transform scale-105' 
                          : 'border-secondary/30 text-coffee-700 hover:border-accent/70 hover:text-accent hover:bg-accent/10'
                      }`}
                    >
                      <Icon size={24} className="mb-2 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-sm">{exp.name}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* Active Experience Description */}
              {activeExperience && (
                <div className="text-center">
                  <p className="text-coffee-700 font-semibold">{activeExperience.description}</p>
                </div>
              )}
            </div>

            {/* Enhanced Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end mb-8">
                {/* Date Input */}
                <div className="space-y-3">
                  <label className="text-xs uppercase font-bold text-primary tracking-wider flex items-center gap-2">
                    <Calendar size={16} className="text-accent" />
                    Date
                  </label>
                  <div className="relative group">
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-gradient-to-r from-cream to-white border-2 border-secondary/30 rounded-xl py-4 px-4 text-primary font-semibold focus:outline-none focus:border-secondary focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Guests Select */}
                <div className="space-y-3">
                  <label className="text-xs uppercase font-bold text-primary tracking-wider flex items-center gap-2">
                    <Users size={16} className="text-accent" />
                    Number of People
                  </label>
                  <div className="relative group">
                    <select 
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-gradient-to-r from-cream to-white border-2 border-secondary/30 rounded-xl py-4 px-4 text-primary font-semibold focus:outline-none focus:border-secondary focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                      <option value="9+">10+</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current text-accent" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Time Select */}
                <div className="space-y-3">
                  <label className="text-xs uppercase font-bold text-primary tracking-wider flex items-center gap-2">
                    <Clock size={16} className="text-accent" />
                    Pickup/Visit Time
                  </label>
                  <div className="relative group">
                    <select 
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-gradient-to-r from-cream to-white border-2 border-secondary/30 rounded-xl py-4 px-4 text-primary font-semibold focus:outline-none focus:border-secondary focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option>7:00 AM</option>
                      <option>8:00 AM</option>
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 fill-current text-accent" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[56px] bg-gradient-to-r from-secondary to-accent text-primary font-black text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  size="lg"
                >
                  <span className={`transition-opacity duration-300 ${
                    isSubmitting ? 'opacity-0' : 'opacity-100'
                  }`}>
                    Place Order
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </Button>
              </div>
            </form>
            
            {/* Enhanced Footer */}
            <div className="border-t border-secondary/20 pt-6">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-4 text-sm text-coffee-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Fresh Daily
                  </span>
                  <span>•</span>
                  <span>Quick Confirmation</span>
                </div>
                <p className="text-sm text-coffee-600 font-medium">
                  Custom cake orders require 48-hour advance notice. 
                  <br className="hidden sm:inline" />
                  Catering for 20+ people available with advance booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};