import React from 'react';

interface ShowCardProps {
  title: string;
  image: string;
}

const ShowCard: React.FC<ShowCardProps> = ({ title, image }) => {
  return (
    <div className="rounded-lg overflow-hidden relative aspect-[3/4] w-full group cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="absolute h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 flex flex-col justify-end">
        <p className="text-white text-md font-medium">{title}</p>
      </div>
    </div>
  );
};

export default ShowCard;