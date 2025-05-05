import React from 'react';
import ImgDesktop from '../Assets/hero.png';
import ImgMobile from '../Assets/hel.png'; // 📱 mobile image

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#1c1c1c] text-white bg-center bg-no-repeat bg-cover">
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
          className="block sm:hidden w-full h-[60vh] object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-[70vh] sm:h-screen relative z-10">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8 font-bold tracking-wide text-center px-4" style={{ marginTop:'480px'}}>
            Your VIP Access to Celebrity Style
          </p>
          <button className="bg-[#c9924e] hover:bg-[#B38F2D] text-black px-6 py-2 sm:px-10 sm:py-3 rounded-full font-medium transition-all duration-300 mb-4 sm:mb-0">
            See More Outfits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;