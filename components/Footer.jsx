// components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white  py-6 ">
      <div className="container mx-auto text-center space-y-3">
        
        
        
        {/* Navigation Links */}
        

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()}  Route Safe. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
