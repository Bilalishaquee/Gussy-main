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
    <div className="flex gap-4 overflow-hidden w-full">
      {slicedItems.map((item, index) => (
        <div
          key={index}
          className="w-full"
          style={{ flex: `0 0 ${100 / visibleSlides}% `}}
        >
          {renderItem(item, activeIndex + index)}
        </div>
      ))}
    </div>
  );
};

export default Carousel;