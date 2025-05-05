import React from 'react';
import { tvShows } from '../data/tvShows';
import Button from './ui/Button';

const TVShows: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">TV Show</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
          {tvShows.map((show) => (
            <div key={show.id} className="aspect-square rounded-full overflow-hidden">
              <img 
                src={show.image} 
                alt={show.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button>See More</Button>
        </div>
      </div>
    </section>
  );
};

export default TVShows;