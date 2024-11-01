import React, { useState, useEffect } from 'react';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const works = [
    { 
      id: 1, 
      category: 'PEOPLE', 
      image: image1, 
      title: 'Pin-up Style', 
      type: 'PEOPLE', 
      className: 'col-span-2 row-span-2'
    },
    { 
      id: 2, 
      category: 'PEOPLE', 
      image: image2, 
      title: 'Portrait Dark', 
      type: 'PEOPLE', 
      className: 'col-span-2 row-span-3 ' 
    },
    { 
      id: 3, 
      category: 'ACCOMMODATION', 
      image: image3, 
      title: 'Sport Wear', 
      type: 'ACCOMMODATION', 
      className: 'col-span-2 row-span-2'
    },
    { 
      id: 4, 
      category: 'PEOPLE', 
      image: image1, 
      title: 'Asian Style', 
      type: 'PEOPLE', 
      className: 'col-span-2 row-span-3'
    },
    { 
      id: 5, 
      category: 'PEOPLE', 
      image: image2, 
      title: 'Eye Detail', 
      type: 'PEOPLE', 
      className: 'col-span-2 row-span-1'
    },
    { 
      id: 6, 
      category: 'ACCOMMODATION', 
      image: image3, 
      title: 'Red Accessory', 
      type: 'ACCOMMODATION', 
      className: 'col-span-2 row-span-2'
    },
    { 
      id: 7, 
      category: 'PEOPLE', 
      image: image1, 
      title: 'Elegant Dress', 
      type: 'PEOPLE', 
      className: 'col-span-2 row-span-3'
    },
    { 
      id: 8, 
      category: 'PEOPLE', 
      image: image2, 
      title: 'Natural Look', 
      type: 'PEOPLE', 
      className: 'col-span-2 row-span-2'
    },
    { 
      id: 9, 
      category: 'PEOPLE', 
      image: image3, 
      title: 'Glamour Shot', 
      type: 'PEOPLE', 
      className: 'col-span-2 row-span-2'
    }
  ];

  const filters = ['ALL', 'PEOPLE', 'ACCOMMODATION', 'ADVENTURE'];

  const filteredWorks = activeFilter === 'ALL' 
    ? works 
    : works.filter(work => work.category === activeFilter);

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
    <div className={`min-h-screen p-8 transition-all ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Filter Buttons */}
      <div className="flex justify-center gap-8 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-sm tracking-wider px-4 py-2 transition-colors duration-300
              ${activeFilter === filter 
                ? 'text-black border-b-2 border-black' 
                : 'text-gray-500 hover:text-black'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-6 gap-4 auto-rows-[100px]">
          {filteredWorks.map(work => (
            <div 
              key={work.id} 
              className={`relative group overflow-hidden ${work.className}`}
            >
              <div className="w-full h-full">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <h3 className="text-lg font-semibold mb-1">{work.title}</h3>
                  <p className="text-sm tracking-wider">{work.type}</p>
                </div>
              </div>
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

export default Works;
