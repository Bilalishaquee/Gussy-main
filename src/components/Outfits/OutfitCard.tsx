import React from 'react';

interface OutfitCardProps {
  title: string;
  image: string;
  description: string;
  source: string;
}

const OutfitCard: React.FC<OutfitCardProps> = ({ title, image, description, source }) => {
  return (
    <div className="mb-6">
      <div className="rounded overflow-hidden mb-2">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover object-top" 
        />
      </div>
      
      <h3 className="text-sm font-medium mb-1">{title}</h3>
      
      <p className="text-xs text-gray-500 mb-1">{description}</p>
      
      <div className="text-xs">
        <span className="text-gray-500">{source}</span>
      </div>
    </div>
  );
};

export default OutfitCard;