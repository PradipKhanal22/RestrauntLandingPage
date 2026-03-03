import React, { useState } from 'react';
import { Camera, Heart, Users, Coffee, ChefHat, Wine } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

const images: GalleryImage[] = [
  {
    id: '1',
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1287&auto=format&fit=crop",
    title: "Cozy Cafe Interior",
    category: "Atmosphere",
    description: "Warm and inviting space",
    icon: Heart,
  },
  {
    id: '2',
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    title: "Fresh Coffee",
    category: "Beverages",
    description: "Premium artisan coffee",
    icon: Coffee,
  },
  {
    id: '3',
    src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=1287&auto=format&fit=crop",
    title: "Custom Cakes",
    category: "Cakes",
    description: "Beautiful custom creations",
    icon: ChefHat,
  },
  {
    id: '4',
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1287&auto=format&fit=crop",
    title: "Fresh Pastries",
    category: "Food",
    description: "Baked fresh daily",
    icon: Camera,
  },
  {
    id: '5',
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1287&auto=format&fit=crop",
    title: "Coffee Art",
    category: "Beverages",
    description: "Latte art perfection",
    icon: Coffee,
  },
  {
    id: '6',
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1287&auto=format&fit=crop",
    title: "Happy Customers",
    category: "Experience",
    description: "Creating memorable moments",
    icon: Users,
  },
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  
  const categories = ['All', ...new Set(images.map(img => img.category))];
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-32 bg-gradient-to-b from-cream via-coffee-50 to-cream scroll-mt-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-secondary mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-bold flex items-center gap-2">
              <Camera size={18} className="text-secondary" />
              Gallery
            </span>
            <div className="h-px w-12 bg-secondary ml-4"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-bold">
            Our Cafe Story in Pictures
          </h2>
          <p className="text-coffee-700 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Discover the warmth and joy that fills Suvan's Cafe every single day
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-secondary to-accent text-primary shadow-xl transform scale-105'
                  : 'bg-white text-primary hover:bg-cream border-2 border-secondary/30 hover:border-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
          {filteredImages.map((image, index) => {
            const Icon = image.icon;
            const isLarge = index === 0 || index === 4;
            
            return (
              <div 
                key={image.id}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] ${
                  isLarge ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1 row-span-1'
                }`}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide shadow-md">
                    {image.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 z-10 text-white transition-all duration-500 ${
                  hoveredImage === image.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/20 backdrop-blur-sm p-2 rounded-lg flex-shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-xl mb-1 italic">
                        {image.title}
                      </h3>
                      <p className="text-cream font-semibold text-sm leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* View Button */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
                  hoveredImage === image.id ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <div className="max-w-md mx-auto">
            <h3 className="font-serif text-2xl text-primary mb-4 italic">
              Share Your Suvan's Cafe Moments
            </h3>
            <p className="text-primary font-semibold mb-6">
              Follow us @lumiererestaurant and share your experience with #LumiereMoments
            </p>
            <div className="flex justify-center items-center gap-2 text-accent">
              <Camera size={20} />
              <span className="font-medium">#LumiereMoments</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};