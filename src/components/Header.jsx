// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our People', path: '/people' },
    { name: 'Practice Areas', path: '/expertise' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    // Simple white header with a bottom border
    <header className="bg-white text-black border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex">
          <Link to="/" className="flex items-center">
            <img src="/logo.jpeg" alt="tp" className="h-12 w-auto" />
            <img src="/name.jpeg" alt="tp" className="h-8 w-auto ml-2 mt-2" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (you would add state to control this) */}
        <div className="md:hidden">
          <button className="text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;