// src/pages/About.jsx

import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Us
        </h1>
        
        <div className="text-lg text-gray-700 space-y-6 text-left">
          <p>
            At Trustlex Partners, we believe good legal advice should be clear, practical, and built on trust.
          </p>
          <p>
            Our goal is simple: to help you solve your legal issues with confidence and peace of mind. </p>
          <p>
            We know that dealing with legal matters can feel overwhelming.That’s why we take the time to listen, understand your situation, and guide you step by step.Whether it’s a personal issue, a family matter, a business concern, or a dispute, our team is here to provide straightforward advice and strong representation.
          </p>
          <p>
            Our lawyers bring years of experience in areas such as litigation, property law, family disputes, corporate matters, taxation, and compliance.No matter how complex the challenge, we work hard to find practical solutions that protect your interests. 
          </p>
          <p>
            At Trustlex Partners, we’re not just your lawyers—we’re your partners in navigating the law with clarity and care. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;