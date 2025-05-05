import React from 'react';
import { streamingPlatforms } from '../data/streamingPlatforms';

const AsSeenOn: React.FC = () => {
  const duplicatedPlatforms = [...streamingPlatforms, ...streamingPlatforms];

  return (
    <section className="py-12 border-t border-b w-full overflow-hidden">
      <div className="w-full">
        <h2 className="text-3xl font-serif text-center mb-10 font-bold">As seen on</h2>
        
        {/* Marquee container */}
        <div className="relative w-full h-24 overflow-hidden">
          {/* Animated slider */}
          <div className="absolute top-0 left-0 flex items-center h-full animate-marquee whitespace-nowrap">
            {duplicatedPlatforms.map((platform, index) => (
              <div 
                key={`${platform.id}-${index}`} 
                className="grayscale hover:grayscale-0 transition-all duration-300 mx-8 md:mx-12 flex-shrink-0"
              >
                {/* Container with fixed size */}
                <div className="w-40 h-16 md:w-48 md:h-20 flex items-center justify-center">
                  <img 
                    src={platform.logo} 
                    alt={platform.name}
                    className="w-full h-full object-contain p-2" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AsSeenOn;