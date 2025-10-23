// src/pages/Home.js

import React from 'react';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
// import AboutBlurb from '../components/AboutBlurb';

const Home = () => {
  return (
    // This is just an assembler for homepage sections
    <div>
      <Hero />
      <PracticeAreas />
      {/* You would add more sections here */}
      {/* <AboutBlurb /> */}
    </div>
  );
};

export default Home;