// src/pages/Home.js

import React from 'react';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import AboutBlurb from '../components/AboutBlurb';
import TrustSection from '../components/TrustSection';

const Home = () => {
  return (
    // This is just an assembler for homepage sections
    <div>
      <Hero />
      <AboutBlurb />
      <PracticeAreas />
      <TrustSection />
    </div>
  );
};

export default Home;