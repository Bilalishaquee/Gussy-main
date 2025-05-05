import React from 'react';

interface CarouselProps<T> {
  items: T[];
  activeIndex: number;
  renderItem: (item: T) => React.ReactNode;
  visibleSlides?: number;
}

function Carousel<T>({ 
  items, 
  activeIndex, 
  renderItem,
  visibleSlides = 1
}: CarouselProps<T>) {
  return (
    <div className="overflow-hidden">
      <div 
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{ 
          transform: `translateX(-${activeIndex * (100 / visibleSlides)}%)`,
          width: `${(items.length / visibleSlides) * 100}%`
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="px-2"
            style={{ width: `${100 / items.length * visibleSlides}%` }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;