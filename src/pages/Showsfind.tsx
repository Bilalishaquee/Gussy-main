import React, { useState, useRef, useEffect } from 'react';
import SHows from './Showsfindr';
import { Search } from 'lucide-react';
import product1 from '../Assets/HOMEPAGE/1.png';
import product2 from '../Assets/HOMEPAGE/2.png';
import product3 from '../Assets/HOMEPAGE/3.png';
import product4 from '../Assets/HOMEPAGE/4.png';
import product5 from '../Assets/HOMEPAGE/5.png';
import product6 from '../Assets/HOMEPAGE/6.png';
import product7 from '../Assets/HOMEPAGE/7.png';
import product8 from '../Assets/HOMEPAGE/8.png';
import product9 from '../Assets/HOMEPAGE/9.png';
import product10 from '../Assets/HOMEPAGE/10.png';
import product11 from '../Assets/HOMEPAGE/11.png';
import product12 from '../Assets/HOMEPAGE/12.png';




const Fashion: React.FC = () => {

  return (
  
    <div className="min-h-screen bg-black text-white" >
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white px-4">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Discover TV Fashion</h1>
          <p className="text-base md:text-lg mb-6">Shop the exact clothes worn by your favorite TV characters</p>
          <button
  className="text-black px-6 py-2 sm:px-10 sm:py-3 rounded-full font-medium transition-all duration-300 mb-4 sm:mb-0"
  style={{
    background: 'linear-gradient(to right, #b87d2e, #f1d3a0, #b87d2e)',
  }}
>
  Explore Now
</button>

        </div>
      </div>

      <div className="bg-white py-8 md:py-12 text-black">

        <SHows/>
      </div>

      {/* Shop Section */}
     
    </div>
  );
};

export default Fashion;

