import React from 'react';
import ImgDesktop from '../Assets/hero.png';
import ImgMobile from '../Assets/hel.png';
import bg from '../Assets/bg.png';

const Hero: React.FC = () => {
  return (
    <div className="relative text-white">
      {/* Desktop Background Image (shown only on desktop) */}
      <div 
        className="hidden sm:block absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Mobile Black Background (shown only on mobile) */}
      <div 
        className="block sm:hidden absolute inset-0 w-full h-full bg-black"
      ></div>

      {/* Background Images */}
      <div className="absolute inset-0 w-full">
        {/* Desktop Image */}
        <img
          src={ImgDesktop}
          alt="Hero Background Desktop"
          className="hidden sm:block w-full h-screen object-cover"
        />
        {/* Mobile Image with reduced height */}
        <img
          src={ImgMobile}
          alt="Hero Background Mobile"
          className="block sm:hidden w-full h-[45vh] object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-[70vh] sm:h-screen relative z-10">
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Desktop Text (single line) */}
          <p 
            className="hidden sm:block text-3xl lg:text-4xl mb-8 font-bold tracking-wide text-center px-4 mt-[600px]" 
            style={{ fontFamily: "'Brygada 1918', serif" }}
          >
            Your VIP Access to Celebrity Style
          </p>
          
          {/* Mobile Text (multi-line) */}
          <div className="block sm:hidden text-center mt-[300px]">
            <p 
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide"
              style={{ fontFamily: "'Brygada 1918', serif" }}
            >
              Your VIP Access to
            </p>
            <p 
              className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide mb-4"
              style={{ fontFamily: "'Brygada 1918', serif" }}
            >
              Celebrity Style
            </p>
          </div>
          
          <button
            className="text-black px-6 py-2 sm:px-10 sm:py-3 rounded-full font-medium transition-all duration-300 mb-4 sm:mb-0"
            style={{
              background: 'linear-gradient(to right, #b87d2e, #f1d3a0, #b87d2e)',
              fontFamily: "'Afacad', serif"
            }}
          >
            See More Outfits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;