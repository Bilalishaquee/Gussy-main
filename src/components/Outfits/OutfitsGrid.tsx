import React from 'react';
import OutfitCard from './OutfitCard';

interface Outfit {
  id: number;
  title: string;
  image: string;
  description: string;
  source: string;
}

interface OutfitsGridProps {
  outfits: Outfit[];
  title?: string;
}

const OutfitsGrid: React.FC<OutfitsGridProps> = ({ outfits, title }) => {
  return (
    <div>
      {title && (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {outfits.map((outfit) => (
          <OutfitCard 
            key={outfit.id}
            title={outfit.title}
            image={outfit.image}
            description={outfit.description}
            source={outfit.source}
          />
        ))}
      </div>
    </div>
  );
};

export default OutfitsGrid;