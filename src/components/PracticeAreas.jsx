// src/components/PracticeAreas.js

import React from 'react';

const areas = [
  { name: 'Civil & Commercial Litigation', description: 'We represent clients in civil suits, contractual disputes, recovery proceedings, injunctions, and high-value commercial litigation...' [cite: 41, 42] },
  { name: 'Criminal Law & NDPS Matters', description: 'From bail applications to trial and appeals, we provide strong defense... including specialized expertise in NDPS matters...' [cite: 43, 44] },
  { name: 'Corporate & Business Law', description: 'We advise businesses on incorporation, restructuring, compliance, joint ventures, mergers, and regulatory matters.' [cite: 45] },
  { name: 'Banking & Financial Disputes', description: 'We handle disputes involving loans, recoveries, negotiable instruments, and financial irregularities.' [cite: 47] },
  { name: 'Cyber Law', description: '...we guide clients through matters involving cyber-crime, data protection, and online fraud...' [cite: 49] },
  { name: 'Taxation & Regulatory', description: 'Our taxation practice covers GST, ITC disputes, and compliance-related issues...' [cite: 50] },
  { name: 'Family & Matrimonial Law', description: 'We handle sensitive matters like divorce, custody, adoption, maintenance, and succession...' [cite: 51] },
  { name: 'Labour & Employment Law', description: 'Our practice includes disputes relating to termination, workplace harassment, industrial disputes, and labour law compliance.' [cite: 53] },
  { name: 'Property & Real Estate', description: 'We provide services in title verification, property disputes, tenancy issues, and transactional support...' [cite: 55] },
  { name: 'Immigration Law', description: '...assisting individuals and businesses with visa disputes, residency issues, and compliance with international mobility laws.' [cite: 56] },
  { name: 'Arbitration & Alternative Dispute Resolution (ADR)', description: 'We represent clients in domestic and international arbitrations... Our trained mediators also help parties reach amicable settlements...' [cite: 57, 58] },
  { name: 'Administrative & Service Law', description: 'Our practice includes handling writs, appeals, and service-related disputes before High Courts and tribunals...' [cite: 59] }
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