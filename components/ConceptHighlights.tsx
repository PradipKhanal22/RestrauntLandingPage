import React from 'react';
import { Coffee, Cake, Sparkles, Heart } from 'lucide-react';

const concepts = [
  {
    title: "Artisan Coffee",
    subtitle: "Premium Bean Selection",
    description: "Locally sourced, expertly roasted beans brewed to perfection every time",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1287&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    icon: Coffee,
  },
  {
    title: "Fresh Drinks",
    subtitle: "Refreshing & Healthy",
    description: "From smoothies to fresh juices, crafted with natural ingredients",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1287&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    icon: Sparkles,
  },
  {
    title: "Daily Baked Snacks",
    subtitle: "Fresh Every Morning",
    description: "Cookies, muffins, croissants - all baked fresh daily in-house",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1287&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    icon: Heart,
  },
  {
    title: "Custom Cakes",
    subtitle: "Made Your Way",
    description: "Personalized cakes for birthdays, weddings, and every celebration",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1287&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    icon: Cake,
  },
];

export const ConceptHighlights: React.FC = () => {
  return (
    <section id="concept" className="py-32 px-4 md:px-8 bg-gradient-to-b from-cream via-coffee-50 to-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#F4D03F_1px,transparent_0)] bg-[length:48px_48px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-secondary mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-bold flex items-center gap-2">
              <Coffee size={16} /> What We Offer
            </span>
            <div className="h-px w-12 bg-secondary ml-4"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-bold">
            Crafted With Love & Passion
          </h2>
          <p className="text-coffee-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Every cup, every bite is a testament to our commitment to quality and your happiness
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <div 
                key={index} 
                className={`relative group overflow-hidden rounded-2xl ${concept.colSpan} h-full cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-secondary/20 hover:border-secondary/50`}
              >
                {/* Image with Enhanced Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={concept.image} 
                    alt={concept.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent group-hover:from-primary/80 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-secondary/20 backdrop-blur-sm rounded-full border-2 border-secondary/40 group-hover:bg-secondary/30 group-hover:border-secondary transition-all duration-300">
                      <Icon size={28} className="text-secondary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="block text-sm uppercase tracking-wider mb-3 text-secondary/90 font-bold group-hover:text-accent transition-colors duration-300">
                      {concept.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl lg:text-4xl mb-3 font-bold leading-tight text-secondary">
                      {concept.title}
                    </h3>
                    <p className="text-cream/90 text-base leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-sm font-medium">
                      {concept.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" className="text-white">
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-xl transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};