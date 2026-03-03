import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Navigation, Award, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    primary: 'Suvan\'s Cafe',
    details: ['123 Main Street', 'Your City, State 12345'],
    link: 'https://maps.google.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    primary: '+1 (555) 555-1234',
    details: ['Available daily 7am-10pm'],
    link: 'tel:+15555551234'
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'hello@suvanscafe.com',
    details: ['We\'d love to hear from you'],
    link: 'mailto:hello@suvanscafe.com'
  }
];

const hours = [
  { day: 'Monday - Friday', dinner: '7:00 AM - 9:00 PM', brunch: null },
  { day: 'Saturday - Sunday', dinner: '8:00 AM - 10:00 PM', brunch: null },
];

export const VisitUs: React.FC = () => {
  return (
    <section id="visit" className="py-32 bg-gradient-to-br from-cream via-coffee-50 to-cream scroll-mt-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-secondary mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-bold flex items-center gap-2">
              <Navigation size={18} className="text-secondary" />
              Visit Us
            </span>
            <div className="h-px w-12 bg-secondary ml-4"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-bold">
            Come Visit Suvan's Cafe
          </h2>
          <p className="text-coffee-700 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Located in your neighborhood, we're here to serve you with a smile and the best coffee in town
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Enhanced Info Section */}
          <div className="lg:w-2/5 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a 
                    key={index}
                    href={info.link}
                    className="group block p-6 bg-white rounded-2xl border-2 border-secondary/30 hover:border-secondary hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-secondary/20 rounded-xl group-hover:bg-secondary/30 transition-colors duration-300 border-2 border-secondary/30">
                          <Icon size={28} className="text-accent" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs uppercase tracking-wider text-coffee-700 font-bold mb-1">
                          {info.title}
                        </p>
                        <p className="font-serif text-xl text-primary mb-2 group-hover:text-accent transition-colors duration-300 font-bold">
                          {info.primary}
                        </p>
                        <div className="text-sm text-coffee-700 space-y-1 font-medium">
                          {info.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Hours Section */}
            <div className="bg-white rounded-2xl border-2 border-secondary/30 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/20 rounded-xl border-2 border-secondary/30">
                  <Clock size={24} className="text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-primary font-bold">Opening Hours</h3>
              </div>
              
              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-start py-3 border-b-2 border-secondary/20 last:border-b-0">
                    <div className="font-bold text-primary">
                      {schedule.day}
                    </div>
                    <div className="text-right text-sm text-primary space-y-1 font-semibold">
                      {schedule.dinner && (
                        <div>
                          {schedule.dinner}
                        </div>
                      )}
                      {schedule.brunch && (
                        <div>
                          {schedule.brunch}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border-2 border-secondary/30 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Car size={20} className="text-accent" />
                  <h4 className="font-bold text-primary">Parking</h4>
                </div>
                <p className="text-sm text-coffee-700 font-medium">
                  Free parking available. Street parking nearby.
                </p>
              </div>
              
              <div className="bg-white rounded-xl border-2 border-secondary/30 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee size={20} className="text-accent" />
                  <h4 className="font-bold text-primary">Wifi Available</h4>
                </div>
                <p className="text-sm text-coffee-700 font-medium">
                  Free high-speed WiFi for all customers.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Map Section */}
          <div className="lg:w-3/5">
            <div className="relative h-[500px] lg:h-[600px] bg-stone-200 rounded-2xl overflow-hidden shadow-xl border border-stone-200 group">
              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              
              {/* Map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.99226268459418!3d40.73971397932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a2d5f8b0d5%3A0x6b8b8b8b8b8b8b8b!2sFlatiron%20Building!5e0!3m2!1sen!2sus!4v1633020000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="filter grayscale-[50%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg text-primary font-bold mb-1">
                        Suvan's Cafe
                      </h4>
                      <p className="text-sm text-coffee-700 font-semibold">
                        123 Main Street, Your City, State 12345
                      </p>
                    </div>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-accent text-white p-2 rounded-lg hover:bg-accent/80 transition-colors duration-300"
                    >
                      <Navigation size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transportation Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-secondary/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={16} className="text-accent" />
                  <h4 className="font-medium text-primary">Parking</h4>
                </div>
                <p className="text-sm text-coffee-700 font-semibold">
                  Free street parking available nearby
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-secondary/30 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Car size={16} className="text-accent" />
                  <h4 className="font-medium text-primary">Rideshare</h4>
                </div>
                <p className="text-sm text-coffee-700 font-semibold">
                  Uber & Lyft pickup available at front entrance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};