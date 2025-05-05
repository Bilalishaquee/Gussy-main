import React from 'react';
// import ProductDetails from '../components/ProductDetails';
import Moreitems from '../components/Moreitems';
import Loveisland from '../components/loveisland';
import More from '../components/Morelatest';
import img from '../Assets/HOMEPAGE/1.png';
import img1 from '../Assets/img.png';
import Layout from '../components/Layout/Layout';

const ProductPage: React.FC = () => {
 
  return (
    // <>
    // <Layout>
      <div className="container mx-auto px-4 py-8">
        
        {/* Product Images + Details Section */}
        <div className="flex flex-col md:flex-row mb-16">
          {/* Images Container - Takes full width on mobile, 2/3 on desktop */}
          <div className="md:w-2/3">
            {/* Images Row - flex on all screens */}
            <div className="flex w-full overflow-x-auto md:overflow-visible">
              {/* First Image */}
              <div className="w-1/2 flex-shrink-0 md:w-1/2 pr-2">
                <img 
                  src={img}
                  alt="Person wearing product" 
                  className="w-full object-cover h-full max-h-[500px]"
                />
              </div>
              
              {/* Second Image */}
              <div className="w-1/2 flex-shrink-0 md:w-[44%] bg-[#f7f5f6]">
                <img 
                  src={img1} 
                  alt="Product listing" 
                  className="w-full object-contain h-full max-h-[500px]"
                />
              </div>
            </div>
            
            {/* Buy Now Button - visible only on mobile */}
            <div className="md:hidden mt-6 w-full text-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full w-full max-w-[300px] mx-auto">
                Buy Now
              </button>
            </div>
          </div>
          
          {/* Product Details - Takes full width on mobile, 1/3 on desktop */}
          <div className="md:w-1/3 pt-8 md:pt-0 md:pl-8">
            <h1 className="text-2xl font-bold mb-2">Gina Kirschenheiter's Black Floral Long Sleeve Mini Dress</h1>
            
            <div className="flex items-center mb-6">
              <span className="inline-block mr-2">❤️</span>
              <span>Love Island S8E5</span>
            </div>
            
            <p className="mb-4">
              This stunning geometric pattern bikini set features a triangle top 
              with adjustable straps and a high-cut bottom. Made with 
              premium quick-dry fabric that offers UPF 50+ protection.
            </p>
            
            <p className="mb-8">
              This stunning geometric pattern bikini set features a triangle top 
              with adjustable straps and a high-cut bottom. Made with 
              premium quick-dry fabric that offers UPF 50+ protection.
            </p>
            
            {/* Buy Now Button - hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
        <Moreitems/>
        <br/>
        <Loveisland/>
        <More/>
  
      </div>
    // </Layout>
    // </>
  );
};

export default ProductPage;