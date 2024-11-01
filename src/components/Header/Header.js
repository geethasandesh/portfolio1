import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

function Header() {
  return (
    <div className="flex items-center justify-between w-full px-8 py-2 bg-black text-white">
      {/* Left Side */}
      <Link to = "/">
        <div className="text-lg font-bold">
          ZEROGRAVITY
        </div>
      </Link>

      {/* Right Side */}
      <div className="flex items-center space-x-16">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/services" className="hover:text-gray-400">Services</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
        <div className="flex items-center">
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <a 
            href="https://www.instagram.com/zeroograavity" // Replace with your actual Instagram link
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-10 text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
