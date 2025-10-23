// src/components/Hero.js

import React from 'react';

const Hero = () => {
  return (
    // High-contrast black section
    <div className="bg-black text-white">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Expert Counsel.
            <br />
            Modern Solutions.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            TrustLex Partners is a full-service law firm dedicated to
            providing strategic advice to navigate your most complex legal challenges.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black font-semibold py-3 px-8 
                       hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;