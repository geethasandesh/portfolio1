import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-8 py-2 bg-black text-white">
      {/* Left Side */}
      <div className="flex w-full md:w-auto justify-between items-center">
        <Link to="/" onClick={handleMenuClick}>
          <div className="text-lg font-bold">
            ZEROGRAVITY
          </div>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Right Side */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-16 pt-4 md:pt-0`}>
        <Link to="/" onClick={handleMenuClick} className="hover:text-gray-400">Home</Link>
        <Link to="/about" onClick={handleMenuClick} className="hover:text-gray-400">About</Link>
        <Link to="/services" onClick={handleMenuClick} className="hover:text-gray-400">Services</Link>
        <Link to="/projects" onClick={handleMenuClick} className="hover:text-gray-400">Projects</Link>
        <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0">
          <Link to="/contact" onClick={handleMenuClick} className="hover:text-gray-400">Contact</Link>
          <a 
            href="https://www.instagram.com/zeroograavity"
            target="_blank" 
            rel="noopener noreferrer" 
            className="md:ml-10 text-pink-500"
            onClick={handleMenuClick}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
