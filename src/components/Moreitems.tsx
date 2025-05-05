import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importing local images
import image1 from '../Assets/HOMEPAGE/1.png';
import image2 from '../Assets/HOMEPAGE/2.png';
import image3 from '../Assets/HOMEPAGE/3.png';
import image4 from '../Assets/HOMEPAGE/4.png';

interface FashionItem {
  id: number;
  title: string;
  image: string;
  source: string;
  platform: string;
}

interface FashionCarouselProps {
  title?: string;
  items?: FashionItem[];
}

export default function FashionCarousel({
  title = "More Items Worn By Gina Kirschenheiter",
  items: propItems,
}: FashionCarouselProps) {
  const defaultItems: FashionItem[] = [
    {
      id: 1,
      title: "Gina Kirschenheiter's Black Floral Long Sleeve Mini Dress",
      image: image1,
      source: "Real Housewives of Orange County",
      platform: "Instagram Fashion"
    },
    {
      id: 2,
      title: "Leva Bonaparte's Tan And White Printed Halter Dress",
      image: image2,
      source: "Southern Charm",
      platform: "Instagram Fashion"
    },
    {
      id: 3,
      title: "Brynn Whitfield's White Satin Lace Trim Dress",
      image: image3,
      source: "Real Housewives of New York",
      platform: "Instagram Fashion"
    },
    {
      id: 4,
      title: "Leva Bonaparte's White Cable Knit Varsity Sweater",
      image: image4,
      source: "Southern Charm",
      platform: "Instagram Fashion"
    },
  ];

  const items = propItems || defaultItems;
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Responsive items per page
  const getItemsPerPage = () => {
    if (window.innerWidth < 640) return 1; // Mobile
    if (window.innerWidth < 768) return 2; // Tablet
    return 4; // Desktop
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Update items per page on resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setItemsPerPage(getItemsPerPage());
    });
  }

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev >= items.length - itemsPerPage ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const visibleItems = items.slice(currentSlide, currentSlide + itemsPerPage);
  // If we're at the end and there aren't enough items to fill the view, take from the start
  const remainingItems = itemsPerPage - visibleItems.length;
  if (remainingItems > 0) {
    visibleItems.push(...items.slice(0, remainingItems));
  }

  const totalDots = items.length;
  const currentDot = currentSlide;

  return (
    <section className="py-6 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-center mb-6 md:mb-8">{title}</h2>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {visibleItems.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-2 md:mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-xs sm:text-sm line-clamp-2">{item.title}</h3>
                <div className="text-xs sm:text-sm text-gray-600 line-clamp-1">
                  {item.source} <span className="italic">{item.platform}</span>
                </div>
              </div>
            ))}
          </div>

          {items.length > itemsPerPage && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-1 md:p-2 shadow-md hover:scale-110 transition-transform"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-1 md:p-2 shadow-md hover:scale-110 transition-transform"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </>
          )}

          {items.length > itemsPerPage && (
            <div className="flex justify-center mt-4 md:mt-6 space-x-1 md:space-x-2">
              {Array.from({ length: Math.min(totalDots, 10) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-2 h-2 rounded-full ${currentDot === idx ? 'bg-black' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          <div className="text-center md:text-right mt-3 md:mt-4">
            <button className="text-xs md:text-sm underline">View All</button>
          </div>
        </div>
      </div>
    </section>
  );
}