// src/components/AboutBlurb.js

import { Link } from 'react-router-dom';

const AboutBlurb = () => {
  return (
    // We alternate the background color to create separation
    // Hero was black, PracticeAreas was white, so this is light gray.
    // We'll use 'bg-gray-50' for a very subtle, clean off-white look.
    <section className="bg-gray-50 text-black py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          A Firm Built on Trust and Expertise
        </h2>
        
        <div className="text-lg text-gray-700 space-y-6 text-left md:text-center">
          <p>
          At Trustlex Partners, we believe good legal advice should be clear, practical, and built on trust. Our goal is simple: to help you solve your legal issues with confidence and peace of mind.We know that dealing with legal matters can feel overwhelming. That’s why we take the time to listen, understand your situation, and guide you step by step... At Trustlex Partners, we’re not just your lawyers—we’re your partners in navigating the law with clarity and care
          </p>
          <p>
            Recognized for our legal prowess and extensive expertise, TrustLex Partners 
            excels in providing customized solutions to complex legal challenges, 
            building trust and delivering result-oriented outcomes for clients 
            across diverse sectors.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/about"
            className="font-semibold text-black border border-black py-3 px-8 
                       hover:bg-black hover:text-white transition-all duration-300"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutBlurb;