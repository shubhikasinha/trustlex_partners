// src/components/PracticeAreas.jsx

import { Link } from 'react-router-dom'; // Link ko import karein
import { practiceAreas } from '../data/practiceAreasData'; // Aapki data file se import karein

// Homepage par dikhane ke liye sirf pehle 6 practice areas ko chunein
const featuredAreas = practiceAreas.slice(0, 6);

const PracticeAreas = () => {
  return (
    // Simple white section with black text
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our PracticeAreas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Yahaan hum featuredAreas (pehle 6) par map kar rahe hain */}
          {featuredAreas.map((area) => (
            <div
              key={area.name} // Key ko area.name se set karein
              className="border border-gray-200 p-8 
                         hover:border-black hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {area.name} {/* Title ko area.name se set karein */}
              </h3>
              <p className="text-gray-600 mb-6">
                {/* Homepage ke liye ek short, dynamic description */}
                Strategic advice and representation for {area.name.toLowerCase()} matters.
              </p>
              {/* Link ko /expertise page par point karein */}
              <Link to="/expertise" className="font-semibold text-black hover:text-gray-700">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;