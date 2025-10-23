// src/components/TrustSection.js

import React from 'react';

// --- Card Component ---
// We create a reusable "Card" for our items.
// This is where the UI transform happens.
const TrustCard = ({ title, description }) => {
  return (
    <div
      className="
        bg-white border border-gray-200 p-6 
        transition-all duration-300 ease-in-out 
        hover:shadow-xl hover:border-black hover:-translate-y-1
      "
    >
      <h4 className="font-semibold text-xl text-black mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// --- Main Section Component ---
const TrustSection = () => {
  return (
    // We use bg-gray-50 for a subtle background, alternating from the white WhyUs section
    <section className="bg-gray-50 text-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted & Recognized
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Column 1: Trusted By */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">Trusted By</h3>
            <TrustCard
              title="Global Fortune 500s"
              description="Advising multinational corporations on cross-border transactions."
            />
            <TrustCard
              title="Financial Institutions"
              description="Representing leading banks and investment funds."
            />
            <TrustCard
              title="Tech & Startups"
              description="Guiding high-growth companies from inception to IPO."
            />
          </div>

          {/* Column 2: Recognized For */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">Recognized For</h3>
            <TrustCard
              title="Chambers & Partners"
              description="Ranked 'Band 1' for Corporate and M&A."
            />
            <TrustCard
              title="Legal 500"
              description="Top-tier firm for Dispute Resolution and Arbitration."
            />
            <TrustCard
              title="IFLR1000"
              description="Highly regarded for Banking, Finance, and Project Development."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;