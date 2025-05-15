import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gown1 from '../Assets/HOMEPAGE/13.png';
import gown2 from '../Assets/HOMEPAGE/14.png';
import gown3 from '../Assets/HOMEPAGE/15.png';
import gown4 from '../Assets/HOMEPAGE/16.png';


const TopPicks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  // Mock data to represent the images from your assets
  const topPicks = [
    {
      id: 1,
      image: gown1,
      name: "Black Halter Gown",
      caption: "Seen On Sally Carson"
    },
    {
      id: 2,
      image: gown2,
      name: "Red Evening Gown",
      caption: "Seen On Sally Carson"
    },
    {
      id: 3,
      image: gown3,
      name: "Brown Strapless Gown",
      caption: "Seen On Sally Carson"
    },
    {
      id: 4,
      image: gown4,
      name: "Sequin Evening Dress",
      caption: "Seen On Sally Carson"
    }
  ];

  const updateVisibleSlides = () => {
    if (window.innerWidth < 640) {
      setVisibleSlides(1);
    } else if (window.innerWidth < 1024) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(4);
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => {
      const nextIndex = current + 1;
      return nextIndex < topPicks.length - (visibleSlides - 1) ? nextIndex : 0;
    });
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => {
      const prevIndex = current - 1;
      return prevIndex >= 0 ? prevIndex : Math.max(topPicks.length - visibleSlides, 0);
    });
  };

  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 font-bold">Top Picks</h2>

        <div className="relative w-full">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleSlides)}%)` }}
            >
              {topPicks.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleSlides}% - 16px)` }}
                >
                  <div className="flex flex-col">
                    {/* Full height image container with gray background */}
                    <div className="w-full bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-[450px] md:h-[550px] object-contain"
                      />
                    </div>
                    
                    {/* Horizontal line */}
                    <div className="border-t border-gray-200 w-full my-3"></div>
                    
                    {/* Caption text with info icon */}
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-800">{item.caption}</p>
                      <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-xs">i</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 text-gray-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 -ml-3" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 text-gray-400"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {topPicks.slice(0, topPicks.length - visibleSlides + 1).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${
                activeIndex === index ? 'bg-black' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-end mt-2">
          <a href="#" className="text-sm font-semibold">View All</a>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;