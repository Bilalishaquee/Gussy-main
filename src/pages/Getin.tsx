import React from 'react';
import Contact from '../components/ContactSection';

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative h-[60vh] bg-black">
        <div 
          className="absolute inset-0 bg-black bg-cover bg-center"
          style={{ opacity: 0.5 }}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Get In Touch</h1>
            <p className="text-xl text-white">We'd Love To Hear From You</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <Contact />
      </section>
    </>
  );
};

export default HeroSection;
