import React from 'react';
import ProductCard from './ui/ProductCard';
import Button from './ui/Button';
import { products } from '../data/products';

const FindAndBuy: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12">Find and Buy Now</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.title}
              celebrity={product.celebrity}
              source={product.source}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button>See More Outfits</Button>
        </div>
      </div>
    </section>
  );
};

export default FindAndBuy;