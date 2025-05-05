import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LoveIslandCarouselProps {
  title?: string;
  items: Array<{
    id: number;
    name: string;
    look?: string;
    outfit?: string;
    image: string;
  }>;
}

export default function LoveIslandCarousel({ 
  title = "#RHOBH Season 14 Reunion Looks", 
  items 
}: LoveIslandCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) setCurrentSlide(0); // Reset slide on desktop
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 4;
  const totalDots = isMobile ? items.length : Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    setCurrentSlide(prev => (prev + itemsPerPage) % items.length);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - itemsPerPage + items.length) % items.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index * itemsPerPage);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-8">{title}</h2>
        
        <div className="relative">
          {/* Mobile Slider */}
          <div className="sm:hidden overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="min-w-full px-2">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-sm">{item.name}</h3>
                  <p className="font-bold text-sm text-gray-600">{item.look || item.outfit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {items.slice(currentSlide, currentSlide + 4).map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="font-bold text-sm">{item.name}</h3>
                <p className="font-bold text-sm text-gray-600">{item.look || item.outfit}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button 
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2 h-2 rounded-full ${
                  isMobile 
                    ? idx === currentSlide 
                    : idx === Math.floor(currentSlide / 4)
                    ? 'bg-black' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-right mt-4">
            <a href="#" className="text-sm underline">View All</a>
          </div>
        </div>
      </div>
    </section>
  );
}