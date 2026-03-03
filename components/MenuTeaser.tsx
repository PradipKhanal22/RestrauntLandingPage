import React, { useState } from 'react';
import { Button } from './Button';
import { MenuItem } from '../types';
import { Star, Clock, Coffee, Cake } from 'lucide-react';

const signatureDishes: MenuItem[] = [
  {
    id: '1',
    name: 'Caramel Latte',
    description: 'Rich espresso with velvety caramel and steamed milk, topped with whipped cream.',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1599750750742-a1ad2a7a534a?q=80&w=1287&auto=format&fit=crop',
    category: 'Coffee',
    preparationTime: '5 min',
    isSignature: true,
    dietary: ['Hot']
  },
  {
    id: '2',
    name: 'Mango Smoothie',
    description: 'Fresh mango blended with yogurt, honey, and a splash of orange juice.',
    price: '$6.49',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1152&auto=format&fit=crop',
    category: 'Drinks',
    preparationTime: '4 min',
    isSignature: true,
    dietary: ['Cold', 'Fresh']
  },
  {
    id: '3',
    name: 'Chocolate Chip Cookies',
    description: 'Freshly baked, warm cookies loaded with premium chocolate chips.',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1364&auto=format&fit=crop',
    category: 'Snacks',
    preparationTime: '2 min',
    isSignature: true,
    dietary: ['Fresh Baked']
  },
  {
    id: '4',
    name: 'Custom Birthday Cake',
    description: 'Personalized cakes made to order. Choose your flavors, design & message.',
    price: 'From $45',
    image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=1287&auto=format&fit=crop',
    category: 'Custom Cakes',
    preparationTime: '24-48 hrs',
    isSignature: true,
    dietary: ['Pre-Order']
  },
];

export const MenuTeaser: React.FC = () => {
  const [hoveredDish, setHoveredDish] = useState<string | null>(null);

  return (
    <section id="menu" className="py-32 bg-gradient-to-b from-cream via-coffee-50 to-cream text-primary scroll-mt-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-secondary mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-bold flex items-center gap-2">
              <Coffee size={18} className="text-secondary" />
              Our Menu
            </span>
            <div className="h-px w-12 bg-secondary ml-4"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-bold">
            Signature Selections
          </h2>
          <p className="text-coffee-700 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            From artisan coffees to custom cakes, each item is crafted with love and the finest ingredients
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-secondary/95 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                    {dish.category}
                  </span>
                </div>
                
                {/* Signature Badge */}
                {dish.isSignature && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-accent text-white p-2 rounded-full shadow-lg">
                      <Star size={16} fill="currentColor" />
                    </div>
                  </div>
                )}
                
                {/* Hover Details */}
                <div className={`absolute bottom-4 left-4 right-4 z-10 transition-all duration-500 ${hoveredDish === dish.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="bg-cream/98 backdrop-blur-sm rounded-xl p-4 border border-secondary/30">
                    <div className="flex items-center justify-between text-xs text-primary font-semibold">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-accent" />
                        <span>{dish.preparationTime}</span>
                      </div>
                      {dish.dietary.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Coffee size={14} className="text-secondary" />
                          <span>{dish.dietary[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center px-2">
                <h3 className="font-serif text-2xl mb-3 text-primary group-hover:text-accent transition-colors duration-300 leading-tight font-bold">
                  {dish.name}
                </h3>
                <p className="text-coffee-700 text-sm mb-4 leading-relaxed min-h-[3rem]">
                  {dish.description}
                </p>
                
                {/* Price with Enhanced Styling */}
                <div className="relative">
                  <span className="font-bold text-xl text-accent group-hover:text-secondary transition-colors duration-300">
                    {dish.price}
                  </span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-secondary transition-all duration-300"></div>
                </div>
                
                {/* Dietary Info */}
                {dish.dietary.length > 0 && (
                  <div className="flex justify-center gap-2 mt-3">
                    {dish.dietary.map((diet, i) => (
                      <span key={i} className="text-xs text-primary bg-secondary/20 px-3 py-1 rounded-full font-medium">
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
            <p className="text-coffee-700 mb-6 italic text-lg font-medium">
              "Every cup, every bite, crafted with passion and the finest ingredients"
            </p>
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} className="text-secondary fill-current" />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              aria-label="Explore the full menu"
              className="bg-gradient-to-r from-secondary to-accent text-primary shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/30 min-w-[240px] px-8 py-4 rounded-full transition-all font-bold text-lg"
            >
              <Coffee size={20} className="inline mr-2" />
              View Full Menu
            </Button>

            <Button
              variant="outline"
              size="lg"
              aria-label="Order custom cake"
              className="text-primary border-2 border-accent hover:bg-accent hover:text-cream focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 min-w-[240px] px-8 py-4 rounded-full transition-all font-bold text-lg"
            >
              <Cake size={20} className="inline mr-2" />
              Order Custom Cake
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};