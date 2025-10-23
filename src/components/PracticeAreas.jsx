// src/components/PracticeAreas.js

import React from 'react';

const areas = [
  'Corporate & Commercial',
  'Mergers & Acquisitions',
  'Dispute Resolution',
  'Banking & Finance',
  'Competition Law',
  'Intellectual Property',
];

const PracticeAreas = () => {
  return (
    // Simple white section with black text
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Practice Areas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area}
              className="border border-gray-200 p-8 
                         hover:border-black hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {area}
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic advice and representation for {area.toLowerCase()} matters.
              </p>
              <a href="#" className="font-semibold text-black hover:text-gray-700">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;