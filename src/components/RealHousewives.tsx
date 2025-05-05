import React from 'react';
import { housewives } from '../data/housewives';
import Button from './ui/Button';

const RealHousewives: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Real Housewives Carousel</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {housewives.map((housewife) => (
            <div key={housewife.id} className="text-center">
              <div className="overflow-hidden rounded-lg mb-3 aspect-square">
                <img 
                  src={housewife.image} 
                  alt={housewife.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <h3 className="font-bold">{housewife.name}</h3> {/* Made the name bold */}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button className="font-bold">See More</Button> {/* Made the button text bold */}
        </div>
      </div>
    </section>
  );
};

export default RealHousewives;
