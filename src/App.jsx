// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// We will create these components in the next steps
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* We use flex-col and min-h-screen to make the footer
          stick to the bottom of the page, even on short pages. */}
      <div className="flex flex-col min-h-screen bg-white">
        
        <Header />
        
        {/* The 'main' content grows to fill the available space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other pages here when you build them */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;