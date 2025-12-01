import React from 'react';
import { ChefHat, Utensils, Flame, Users } from 'lucide-react';

const concepts = [
  {
    title: "Seasonal Tasting",
    subtitle: "Farm-to-Table Excellence",
    description: "Curated menus featuring the finest seasonal ingredients from local farms",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    colSpan: "md:col-span-2",
    icon: ChefHat,
  },
  {
    title: "Artisan Cocktails",
    subtitle: "Handcrafted Perfection",
    description: "Unique cocktails crafted with house-made bitters and premium spirits",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    colSpan: "md:col-span-1",
    icon: Utensils,
  },
  {
    title: "Wood-Fired Hearth",
    subtitle: "The Kitchen Heart",
    description: "Traditional techniques meet modern innovation in our wood-fired kitchen",
    image: "https://imgs.search.brave.com/Z46ENTi9rIn-LKBkHKGFuhn8Lw96RBZiaZHnPrOInkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS92aWRlb3MvNjYx/MTcyNC9maXJlLWZp/cmUtYmFja2dyb3Vu/ZC1mbGFtaW5nLXdv/b2QtZmlyZS02NjEx/NzI0LmpwZWc_YXV0/bz1jb21wcmVzcyZj/cz10aW55c3JnYiZk/cHI9MSZ3PTUwMA",
    colSpan: "md:col-span-1",
    icon: Flame,
  },
  {
    title: "Private Dining",
    subtitle: "Exclusive Events",
    description: "Intimate spaces perfect for celebrations and corporate gatherings",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    colSpan: "md:col-span-2",
    icon: Users,
  },
];

export const ConceptHighlights: React.FC = () => {
  return (
    <section id="concept" className="py-32 px-4 md:px-8 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#0f2f24_1px,transparent_0)] bg-[length:48px_48px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">Our Philosophy</span>
            <div className="h-px w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 italic">
            Crafting Memorable Experiences
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every element at Lumière is thoughtfully designed to create an unforgettable dining journey
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <div 
                key={index} 
                className={`relative group overflow-hidden rounded-xl ${concept.colSpan} h-full cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700`}
              >
                {/* Image with Enhanced Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={concept.image} 
                    alt={concept.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                      <Icon size={24} className="text-white group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="block text-sm uppercase tracking-wider mb-3 opacity-80 font-medium group-hover:text-accent transition-colors duration-300">
                      {concept.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl lg:text-4xl mb-3 italic leading-tight">
                      {concept.title}
                    </h3>
                    <p className="text-stone-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-sm">
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