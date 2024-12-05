// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 border-t-4 border-yellow-400 border-b-4 border-green-500 text-white flex justify-evenly items-center p-4 mt-auto">
      {/* Left Section: Copyright Text */}
      <div className="text-sm">© 2024 Example. All rights reserved.</div>
      
      {/* Right Section: Social Media Icons */}
      <div className="flex space-x-4">
        {/* Facebook Icon */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="/assets/facebook.png" 
            alt="Facebook"
            className="w-6 h-6"
          />
        </a>

        {/* YouTube Icon */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="/assets/youtube.png" 
            alt="YouTube"
            className="w-6 h-6"
          />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="/assets/instagram.png" 
            alt="Instagram"
            className="w-6 h-6"
          />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="/assets/twitter.png"
            alt="Twitter"
            className="w-6 h-6"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


