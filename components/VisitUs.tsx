import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Navigation, Award, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    primary: 'Lumière Dining',
    details: ['142 Fifth Avenue', 'New York, NY 10011'],
    link: 'https://maps.google.com'
  },
  {
    icon: Phone,
    title: 'Reservations',
    primary: '+1 (212) 555-0199',
    details: ['Available daily 9am-9pm'],
    link: 'tel:+12125550199'
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'reservations@lumiere.com',
    details: ['General inquiries welcome'],
    link: 'mailto:reservations@lumiere.com'
  }
];

const hours = [
  { day: 'Monday', dinner: 'Closed', brunch: null },
  { day: 'Tuesday - Thursday', dinner: '5:00 PM - 10:00 PM', brunch: null },
  { day: 'Friday - Saturday', dinner: '5:00 PM - 11:00 PM', brunch: '10:00 AM - 2:00 PM' },
  { day: 'Sunday', dinner: '5:00 PM - 9:00 PM', brunch: '10:00 AM - 2:00 PM' }
];

export const VisitUs: React.FC = () => {
  return (
    <section id="visit" className="py-32 bg-gradient-to-br from-stone-50 via-white to-stone-100 scroll-mt-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium flex items-center gap-2">
              <Navigation size={16} className="text-accent" />
              Visit
            </span>
            <div className="h-px w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 italic">
            Find Your Way to Lumière
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Manhattan, we welcome you to experience culinary excellence in an elegant setting
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
                    className="group block p-6 bg-white rounded-2xl border border-stone-200 hover:border-accent/30 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                          <Icon size={24} className="text-accent" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">
                          {info.title}
                        </p>
                        <p className="font-serif text-lg text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {info.primary}
                        </p>
                        <div className="text-sm text-stone-600 space-y-1">
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
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-primary italic">Hours of Operation</h3>
              </div>
              
              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-start py-2 border-b border-stone-100 last:border-b-0">
                    <div className="font-medium text-stone-700">
                      {schedule.day}
                    </div>
                    <div className="text-right text-sm text-stone-600 space-y-1">
                      {schedule.dinner && (
                        <div>
                          <span className="text-primary font-medium">Dinner: </span>
                          {schedule.dinner}
                        </div>
                      )}
                      {schedule.brunch && (
                        <div>
                          <span className="text-primary font-medium">Brunch: </span>
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
              <div className="bg-white rounded-xl border border-stone-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Car size={16} className="text-accent" />
                  <h4 className="font-medium text-primary">Parking</h4>
                </div>
                <p className="text-sm text-stone-600">
                  Valet service available nightly. Public garage on 19th Street.
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-stone-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-accent" />
                  <h4 className="font-medium text-primary">Dress Code</h4>
                </div>
                <p className="text-sm text-stone-600">
                  Smart casual to formal attire preferred.
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
                      <h4 className="font-serif text-lg text-primary italic mb-1">
                        Lumière Restaurant
                      </h4>
                      <p className="text-sm text-stone-600">
                        142 Fifth Avenue, New York, NY 10011
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
              <div className="bg-white rounded-xl border border-stone-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={16} className="text-accent" />
                  <h4 className="font-medium text-primary">Subway</h4>
                </div>
                <p className="text-sm text-stone-600">
                  L, N, Q, R, W, 4, 5, 6 trains to 14th St-Union Sq
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-stone-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Car size={16} className="text-accent" />
                  <h4 className="font-medium text-primary">Rideshare</h4>
                </div>
                <p className="text-sm text-stone-600">
                  Uber & Lyft pickup available on 5th Avenue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};