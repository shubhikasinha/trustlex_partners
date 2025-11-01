// src/components/TeamBlurb.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// teamData.js se humne partners ki list import ki
import { team } from '../data/teamData'; 

const TeamBlurb = () => {
  // Sabhi 5 partners ko homepage pe dikhayein
  const featuredTeam = team;

  return (
    <section className="bg-gray-50 text-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Meet Our Partners
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          At Trustlex Partners, we are proud of the diverse expertise and dedication our team brings to the table. Our partners are committed to delivering practical, reliable, and result-driven legal solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Pehle 3 partners ko feature karein */}
          {featuredTeam.slice(0, 3).map((partner) => (
            <div
              key={partner.name}
              className="bg-white border border-gray-200 p-6 text-center
                         transition-all duration-300 ease-in-out 
                         hover:shadow-xl hover:border-black hover:-translate-y-1"
            >
              <h4 className="font-semibold text-xl text-black mb-1">{partner.name}</h4>
              <p className="text-gray-600">{partner.title}</p>
            </div>
          ))}
          {/* Baaki 2 partners ke liye alag row */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {featuredTeam.slice(3).map((partner) => (
            <div
              key={partner.name}
              className="bg-white border border-gray-200 p-6 text-center
                         transition-all duration-300 ease-in-out 
                         hover:shadow-xl hover:border-black hover:-translate-y-1"
            >
              <h4 className="font-semibold text-xl text-black mb-1">{partner.name}</h4>
              <p className="text-gray-600">{partner.title}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/people"
            className="font-semibold text-black border border-black py-3 px-8 
                       hover:bg-black hover:text-white transition-all duration-300"
          >
            Learn More About Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamBlurb;