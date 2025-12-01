import React, { useState } from 'react';
import { Button } from './Button';
import { MenuItem } from '../types';
import { Star, Clock, Leaf } from 'lucide-react';

const signatureDishes: MenuItem[] = [
  {
    id: '1',
    name: 'Seared Scallops',
    description: 'Cauliflower purée, brown butter emulsion, toasted hazelnuts.',
    price: '$28',
    image: 'https://imgs.search.brave.com/TsW1i1OL2ayHlvfGcTItfIbUdW6TPX4VlAijnVoPxOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/MzA0MzQ1Ny9waG90/by9zcGljeS10aGFp/LWNoaWxpLXNjYWxs/b3BzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1TTS1UZjZR/aHlJMXc3bGZoXzFi/QXIzMlp2ZDhHQjlG/TGtPdWd2N3VjNWV3/PQ',
    category: 'Appetizer',
    preparationTime: '15 min',
    isSignature: true,
    dietary: ['Gluten-Free']
  },
  {
    id: '2',
    name: 'Wagyu Beef Tartare',
    description: 'Smoked egg yolk, pickled mustard seeds, sourdough crisp.',
    price: '$34',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1284&q=80',
    category: 'Appetizer',
    preparationTime: '10 min',
    isSignature: true,
    dietary: []
  },
  {
    id: '3',
    name: 'Herb-Crusted Lamb',
    description: 'Seasonal root vegetables, rosemary jus, mint gel.',
    price: '$52',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1284&q=80',
    category: 'Main Course',
    preparationTime: '25 min',
    isSignature: true,
    dietary: ['Organic']
  },
  {
    id: '4',
    name: 'Dark Chocolate Ganache',
    description: 'Sea salt, olive oil, espresso crumble.',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1284&q=80',
    category: 'Dessert',
    preparationTime: '12 min',
    isSignature: true,
    dietary: ['Vegan', 'Gluten-Free']
  },
];

export const MenuTeaser: React.FC = () => {
  const [hoveredDish, setHoveredDish] = useState<string | null>(null);

  return (
    <section id="menu" className="py-32 bg-gradient-to-b from-white to-stone-50 text-stone-900 scroll-mt-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium flex items-center gap-2">
              <Star size={16} className="text-accent" />
              The Menu
            </span>
            <div className="h-px w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 italic">
            Signature Selections
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Each dish is a carefully crafted journey of flavors, showcasing the finest seasonal ingredients
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
        </div>

        {/* Enhanced Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {signatureDishes.map((dish, index) => (
            <div 
              key={dish.id} 
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                    {dish.category}
                  </span>
                </div>
                
                {/* Signature Badge */}
                {dish.isSignature && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-accent text-white p-2 rounded-full shadow-lg">
                      <Star size={14} fill="currentColor" />
                    </div>
                  </div>
                )}
                
                {/* Hover Details */}
                <div className={`absolute bottom-4 left-4 right-4 z-10 transition-all duration-500 ${hoveredDish === dish.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between text-xs text-stone-600">
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{dish.preparationTime}</span>
                      </div>
                      {dish.dietary.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Leaf size={12} className="text-green-600" />
                          <span>{dish.dietary[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center px-2">
                <h3 className="font-serif text-2xl mb-3 text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                  {dish.name}
                </h3>
                <p className="text-stone-500 text-sm mb-4 leading-relaxed min-h-[3rem]">
                  {dish.description}
                </p>
                
                {/* Price with Enhanced Styling */}
                <div className="relative">
                  <span className="font-bold text-lg text-primary group-hover:text-accent transition-colors duration-300">
                    {dish.price}
                  </span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-8 h-px bg-accent transition-all duration-300"></div>
                </div>
                
                {/* Dietary Info */}
                {dish.dietary.length > 0 && (
                  <div className="flex justify-center gap-1 mt-3">
                    {dish.dietary.map((diet, i) => (
                      <span key={i} className="text-xs text-stone-400 bg-stone-100 px-2 py-1 rounded-full">
                        {diet}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="max-w-md mx-auto mb-8">
            <p className="text-stone-600 mb-6 italic">
              "Every dish tells a story of our commitment to excellence and seasonal authenticity."
            </p>
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="text-accent fill-current" />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="solid"
              size="lg"
              aria-label="Explore the full menu"
              className="bg-gradient-to-r from-accent to-primary text-white shadow-lg hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 min-w-[220px] px-6 py-3 rounded-xl transition-all"
            >
              Explore Full Menu
            </Button>

            <Button
              variant="ghost"
              size="lg"
              aria-label="View wine pairings"
              className="text-stone-700 hover:text-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 min-w-[200px] px-6 py-3 rounded-xl transition-all"
            >
              Wine Pairings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};