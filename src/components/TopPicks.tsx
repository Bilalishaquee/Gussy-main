import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Carousel from './ui/Carousel';
import { topPicks } from '../data/topPicks';

const TopPicks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  const updateVisibleSlides = () => {
    setVisibleSlides(window.innerWidth < 768 ? 1 : 4);
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current + visibleSlides < topPicks.length
        ? current + 1
        : 0
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((current) =>
      current - 1 >= 0
        ? current - 1
        : Math.max(topPicks.length - visibleSlides, 0)
    );
  };

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 font-bold">Top Picks</h2>

        <div className="relative w-full">
          <Carousel 
            items={topPicks}
            activeIndex={activeIndex}
            renderItem={(item) => (
              <div className="flex flex-col items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-[500px] md:h-[700px] object-cover object-top"
                />
                <p className="mt-3 text-sm text-gray-800 font-semibold">{item.caption}</p>
              </div>
            )}
            visibleSlides={visibleSlides}
          />

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 -ml-4"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 -mr-4"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {topPicks.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index >= activeIndex && index < activeIndex + visibleSlides ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-right mt-4">
          <a href="#" className="text-sm underline font-semibold">View All</a>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;