import React from 'react';
import { latestOutfits } from '../data/latestOutfits';
import Button from './ui/Button';

const MoreLatest: React.FC = () => {
  // For mobile, show only first 8 items
  const mobileItems = latestOutfits.slice(0, 8);
  // For larger screens, show all items
  const desktopItems = latestOutfits;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">More of the Latest</h2>
        
        {/* Mobile grid (shows only 8 items) */}
        <div className="grid grid-cols-2 sm:hidden gap-4 mb-8">
          {mobileItems.map((outfit) => (
            <div key={outfit.id} className="group">
              <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
                <img 
                  src={outfit.image} 
                  alt={`${outfit.celebrity}'s ${outfit.title}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-sm mb-1 line-clamp-2">{outfit.celebrity}'s {outfit.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-1">{outfit.source}</p>
            </div>
          ))}
        </div>
        
        {/* Desktop grid (shows all items) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {desktopItems.map((outfit) => (
            <div key={outfit.id} className="group">
              <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
                <img 
                  src={outfit.image} 
                  alt={`${outfit.celebrity}'s ${outfit.title}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-sm mb-1">{outfit.celebrity}'s {outfit.title}</h3>
              <p className="text-xs text-gray-500">{outfit.source}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button>See More Outfits</Button>
        </div>
      </div>
    </section>
  );
};

export default MoreLatest;