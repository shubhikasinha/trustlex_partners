// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Black footer, with light gray text
    <footer className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">TrustLex Partners</h3>
          <p>A solutions-oriented law firm for a complex world.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/people" className="hover:text-white">Our People</Link></li>
            <li><Link to="/expertise" className="hover:text-white">Practice Areas</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Locations */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Locations</h4>
          <ul className="space-y-2">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Bengaluru</li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TrustLex Partners. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;