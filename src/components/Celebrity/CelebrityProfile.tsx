import React from 'react';

interface CelebrityProfileProps {
  name: string;
  image: string;
  show: string;
  location: string;
  network: string;
  description: string;
}

const CelebrityProfile: React.FC<CelebrityProfileProps> = ({ 
  name, 
  image, 
  show, 
  location, 
  network,
  description 
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-[#2b4c43] p-4 text-white h-full">
      <div className="rounded-lg overflow-hidden bg-[#e5e1ff] mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      
      <h2 className="text-2xl font-semibold mb-2 text-[#dfc86f]">{name}</h2>
      
      <p className="text-sm mb-3">
        Shop fashion seen on {name} on <span className="font-medium">{show}</span> of {location}. Photo: {network}
      </p>
      
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default CelebrityProfile;