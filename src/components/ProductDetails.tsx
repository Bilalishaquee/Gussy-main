import React from 'react';

interface ProductDetailsProps {
  title: string;
  sku: string;
  description: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ title, sku, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-serif">{title}</h1>
      
      <div className="flex items-center gap-2">
        <span className="inline-block w-4 h-4 bg-black"></span>
        <span className="text-sm">{sku}</span>
      </div>
      
      <p className="text-gray-700 leading-relaxed">{description}</p>
      
      <button className="bg-[#D4A373] text-white py-3 px-6 rounded-full mt-4 hover:bg-[#C69B6D] transition-colors">
        Buy Now
      </button>
    </div>
  );
};

export default ProductDetails;