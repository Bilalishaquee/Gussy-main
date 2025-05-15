import React from 'react';

interface CarouselProps<T> {
  items: T[];
  activeIndex: number;
  visibleSlides: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

const Carousel = <T,>({
  items,
  activeIndex,
  visibleSlides,
  renderItem,
}: CarouselProps<T>) => {
  const slicedItems = items.slice(
    activeIndex,
    activeIndex + visibleSlides
  );

  return (
    <div className="flex gap-4 w-full h-full">
      {slicedItems.map((item, idx) => (
        <div
          key={idx}
          className="w-full h-full flex-shrink-0"
          style={{ flex: `0 0 ${100 / visibleSlides}%` }}
        >
          {renderItem(item, activeIndex + idx)}
        </div>
      ))}
    </div>
  );
};

export default Carousel;