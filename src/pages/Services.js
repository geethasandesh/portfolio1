import React, { useState, useEffect } from 'react';
import fashion from '../Images/fashion.JPG';
import portrait from '../Images/potrait.JPG';
import food from '../Images/food.JPG';
import wedding from '../Images/wedding.JPG';
import cinematography from '../Images/cinematography.jpeg';
import product from '../Images/product.jpeg';
import editing from '../Images/editing.jpeg';
import reels from '../Images/reels.jpeg';

const services = [
  { title: "Fashion Photography", image: fashion },
  { title: "Portrait Photography", image: portrait },
  { title: "Food Photography", image: food },
  { title: "Wedding Photography", image: wedding },
  { title: "Cinematography", image: cinematography },
  { title: "Product Photography", image: product },
  { title: "Video Editing", image: editing },
  { title: "Reels Shooting", image: reels },
];

const Services = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default is dark mode

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Apply the dark/light mode class to the body
  useEffect(() => {
    document.body.classList.toggle('bg-black', isDarkMode);
    document.body.classList.toggle('bg-white', !isDarkMode);
    document.body.classList.toggle('text-white', isDarkMode);
    document.body.classList.toggle('text-black', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen flex items-center justify-center py-8 transition-all ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="text-center">
        <h1 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Services offered by me!</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-64 w-64 flex items-center justify-center bg-cover bg-center rounded-lg overflow-hidden shadow-strong transform transition-transform duration-500 hover:rotate-x-180"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-gray-300'} opacity-50 hover:opacity-75 transition-opacity duration-300`}></div>
              <span className="relative text-lg font-semibold z-10">{service.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <button 
        className="fixed bottom-8 left-8 bg-gray-300 rounded-full p-3 hover:bg-opacity-70 transition-all duration-300"
        aria-label="Toggle dark mode"
        onClick={toggleDarkMode}
      >
        <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
      </button>
    </div>
  );
};

export default Services;
