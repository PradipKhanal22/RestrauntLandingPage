import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { ChevronLeft, ChevronRight, Star, Quote, Award } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "A masterclass in modern dining. Lumière balances innovation with comfort in a way that feels effortless.",
    author: "Julian Reed",
    source: "The New York Times",
    rating: 5,
    title: "Food Critic",
    avatar: "https://imgs.search.brave.com/Cd-FV7eKDEGkvcpdRhkw4xk-0cLyJLY76hrpoD7f8l0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVybWFuLmVkdS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/My8yMDIxMTAyOV9I/U0NfRmFjdWx0eS0x/MC04MDB4ODAwLTEu/anBn"
  },
  {
    id: '2',
    quote: "The tasting menu is a journey through the seasons. Easily the best new opening of 2025.",
    author: "Sarah Mitchell",
    source: "Eater NY",
    rating: 5,
    title: "Senior Editor",
    avatar: "https://imgs.search.brave.com/Cd-FV7eKDEGkvcpdRhkw4xk-0cLyJLY76hrpoD7f8l0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVybWFuLmVkdS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/My8yMDIxMTAyOV9I/U0NfRmFjdWx0eS0x/MC04MDB4ODAwLTEu/anBn"
  },
  {
    id: '3',
    quote: "Impeccable service, stunning interiors, and food that speaks to the soul. A true destination.",
    author: "Michelin Guide",
    source: "Inspector Notes",
    rating: 5,
    title: "Michelin Inspector",
    avatar: "https://imgs.search.brave.com/Cd-FV7eKDEGkvcpdRhkw4xk-0cLyJLY76hrpoD7f8l0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVybWFuLmVkdS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/My8yMDIxMTAyOV9I/U0NfRmFjdWx0eS0x/MC04MDB4ODAwLTEu/anBn"
  }
];

const pressLogos = [
  { name: "VOGUE", style: "font-bold" },
  { name: "Eater", style: "font-light" },
  { name: "The New York Times", style: "font-serif" },
  { name: "Michelin Guide", style: "font-bold" },
  { name: "Bon Appétit", style: "font-medium" }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };
  
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-stone-100 via-stone-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,#b85c38_1px,transparent_0)] bg-[length:32px_32px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-accent mr-4"></div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium flex items-center gap-2">
              <Quote size={16} className="text-accent" />
              Testimonials
            </span>
            <div className="h-px w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 italic">
            What Critics Say
          </h2>
        </div>
        
        {/* Enhanced Carousel */}
        <div className="max-w-6xl mx-auto text-center relative mb-20">
          {/* Navigation Buttons */}
          <button 
            onClick={prev} 
            className="absolute left-4 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:text-accent hover:border-accent/50 hover:shadow-xl transition-all duration-300 z-10 group"
          >
            <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={next} 
            className="absolute right-4 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:text-accent hover:border-accent/50 hover:shadow-xl transition-all duration-300 z-10 group"
          >
            <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-stone-100 relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote size={120} className="text-accent" />
            </div>
            
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating || 5)].map((_, i) => (
                  <Star key={i} size={20} className="text-accent fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="mb-8">
                <p className="font-serif text-xl md:text-2xl lg:text-3xl text-stone-800 italic leading-relaxed max-w-4xl mx-auto">
                  “{testimonials[currentIndex].quote}”
                </p>
              </div>
              
              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {testimonials[currentIndex].avatar && (
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-stone-200"
                  />
                )}
                <div className="text-center md:text-left">
                  <p className="font-bold text-primary text-lg mb-1">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-stone-500 text-sm mb-1">
                    {testimonials[currentIndex].title}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Award size={14} className="text-accent" />
                    <p className="font-bold text-accent uppercase tracking-wider text-xs">
                      {testimonials[currentIndex].source}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Press Logos */}
        <div className="border-t border-stone-200 pt-16">
          <div className="text-center mb-8">
            <p className="text-stone-600 font-medium uppercase tracking-widest text-sm">
              As Featured In
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {pressLogos.map((logo, i) => (
              <div 
                key={i} 
                className="group cursor-pointer transition-all duration-500 hover:scale-110"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className={`text-xl md:text-2xl text-stone-400 group-hover:text-stone-700 transition-colors duration-300 ${logo.style}`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};