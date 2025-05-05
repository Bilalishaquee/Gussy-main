import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  celebrity: string;
  source: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  celebrity,
  source 
}) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg mb-3 bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="font-medium text-sm mb-1">{celebrity}'s {title}</h3>
      <p className="text-xs text-gray-500">{source}</p>
    </div>
  );
};

export default ProductCard;