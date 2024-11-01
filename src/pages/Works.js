import React, { useState, useEffect } from 'react';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const works = [
    { 
      id: 1, 
      category: 'PEOPLE', 
      image: image1, 
      title: 'Pin-up Style', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 2, 
      category: 'PEOPLE', 
      image: image2, 
      title: 'Portrait Dark', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-3 col-span-full' 
    },
    { 
      id: 3, 
      category: 'ACCOMMODATION', 
      image: image3, 
      title: 'Sport Wear', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 4, 
      category: 'PEOPLE', 
      image: image1, 
      title: 'Asian Style', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-3 col-span-full'
    },
    { 
      id: 5, 
      category: 'PEOPLE', 
      image: image2, 
      title: 'Eye Detail', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-1 col-span-full'
    },
    { 
      id: 6, 
      category: 'ACCOMMODATION', 
      image: image3, 
      title: 'Red Accessory', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 7, 
      category: 'PEOPLE', 
      image: image1, 
      title: 'Elegant Dress', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-3 col-span-full'
    },
    { 
      id: 8, 
      category: 'PEOPLE', 
      image: image2, 
      title: 'Natural Look', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 9, 
      category: 'PEOPLE', 
      image: image3, 
      title: 'Glamour Shot', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    }
  ];

  const filters = ['ALL', 'PEOPLE', 'ACCOMMODATION', 'ADVENTURE'];

  const filteredWorks = activeFilter === 'ALL' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('bg-black', isDarkMode);
    document.body.classList.toggle('bg-white', !isDarkMode);
    document.body.classList.toggle('text-white', isDarkMode);
    document.body.classList.toggle('text-black', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen p-4 md:p-8 transition-all ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full py-2 px-4 bg-gray-800 text-white rounded"
        >
          {activeFilter} ▼
        </button>
      </div>

      {/* Mobile Filter Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute z-50 w-full left-0 bg-gray-800 text-white">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2 px-4 text-left hover:bg-gray-700"
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {/* Desktop Filter Buttons */}
      <div className="hidden md:flex justify-center gap-8 mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-sm tracking-wider px-4 py-2 transition-colors duration-300
              ${activeFilter === filter 
                ? 'text-black border-b-2 border-black dark:text-white dark:border-white' 
                : 'text-gray-500 hover:text-black dark:hover:text-white'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Responsive Masonry Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px] md:auto-rows-[100px]">
          {filteredWorks.map(work => (
            <div 
              key={work.id} 
              className={`relative group overflow-hidden ${work.className}`}
            >
              <div className="w-full h-full">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
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
        className="fixed bottom-4 left-4 md:bottom-8 md:left-8 bg-gray-300 rounded-full p-3 hover:bg-opacity-70 transition-all duration-300 z-50"
        aria-label="Toggle dark mode"
        onClick={toggleDarkMode}
      >
        <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
      </button>
    </div>
  );
};

export default Works;