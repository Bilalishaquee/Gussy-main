import React from 'react';
import NewsletterForm from './NewsletterForm';
import ActionButtons from './ActionButtons';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Join The Style Revolution
        </h2>
        <p className="text-gray-300 text-center text-sm md:text-base mb-8 max-w-xl">
          Subscribe to get celebrity fashion alerts, exclusive discount codes, and trend reports delivered directly to your inbox.
        </p>
        
        <NewsletterForm />
        
        <div className="mt-8 w-full max-w-md">
          <ActionButtons />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;