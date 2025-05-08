import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Carousel from './ui/Carousel';
import { trendingCelebs } from '../data/trendingCelebs';
import Button from './ui/Button';

const TrendingCelebs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 768 ? 1 : 3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => 
      (current + visibleSlides) % trendingCelebs.length
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => 
      (current - visibleSlides + trendingCelebs.length) % trendingCelebs.length
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Trending Celebs</h2>
        
        <div className="relative">
          <Carousel 
            items={trendingCelebs} 
            activeIndex={activeIndex}
            renderItem={(item) => (
              <div className="relative group px-1 md:px-2">
                <div className="overflow-hidden rounded-lg aspect-[3/4]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
            
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 text-white rounded-lg">
  <div>
    <p className="text-xl font-normal leading-snug">
      {item.outfitName}
    </p>
    <p className="text-xl font-normal leading-snug">
      on {item.show}
    </p>
  </div>


                  
                  <button className="inline-flex items-center justify-center px-4 py-1.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-200 w-fit mt-3">
                    Shop Now
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            )}
            
            
            visibleSlides={visibleSlides}
          />
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 -ml-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 -mr-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(trendingCelebs.length / visibleSlides) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index * visibleSlides)}
              className={`w-2 h-2 rounded-full ${
                Math.floor(activeIndex / visibleSlides) === index ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <div className="text-right mt-4">
          <a href="#" className="text-sm underline">View All</a>
        </div>
      </div>
    </section>
  );
};

export default TrendingCelebs;