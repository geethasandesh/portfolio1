import React, { useState, useEffect } from 'react';
import ram from '../Images/ram.JPG';
import vadhina from '../Images/vadhina.JPG';
import jacksparrow from '../Images/jacksparrow.JPG';
import eyes from '../Images/eyes.JPG';
import natura from '../Images/natura.JPG';
import pinup from '../Images/pinup.JPG';
import glamour from '../Images/glamour.JPG';
import accom1 from '../Images/accom1.JPG'
import temple from '../Images/temple.jpg'
import teagarden from '../Images/teagarden.PNG';
import toycars from '../Images/toycars.JPG';
import city from '../Images/city.jpg';
import bhongir from '../Images/bhongir.jpg';
import fire from '../Images/fire.png';
import train from '../Images/train.jpg';
import sunsetflower from '../Images/sunsetflower.jpg';
import drinks from '../Images/drinks.jpg';
import teaglass from '../Images/teaglass.JPG';
import perfume from '../Images/perfume.jpg';
import fishing from '../Images/fishing.JPG';
import stick1 from '../Images/stick1.PNG';
import beach from '../Images/beach.JPG';
import costal from '../Images/costal.jpg';
import hoodie from '../Images/hoodie.jpg';
import kview from '../Images/kview.jpg';
import kview1 from '../Images/kview1.jpg';
import re from '../Images/RE.jpg';
import munnartext from '../Images/munnartext.PNG';
import seaman from '../Images/seaman.jpg';
import sflower from '../Images/sflower.jpg';
import ski from '../Images/ski.jpg';
import varkalafortbeach from '../Images/varkalafortbeach.PNG';



const Works = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const works = [
    { 
      id: 1, 
      category: 'PEOPLE', 
      image: pinup, 
      title: 'Pin-up Style', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 22, 
      category: 'ADVENTURE', 
      image: beach, 
      title: 'vibe', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 2, 
      category: 'PEOPLE', 
      image: ram, 
      title: 'Portrait Dark', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-3 col-span-full' 
    },
    { 
      id: 3, 
      category: 'ACCOMMODATION', 
      image: temple, 
      title: 'Temple', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 4, 
      category: 'PEOPLE', 
      image: vadhina, 
      title: 'Asian Style', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-3 col-span-full'
    },
    { 
      id: 5, 
      category: 'PEOPLE', 
      image: eyes, 
      title: 'Eye Detail', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-1 col-span-full'
    },
    { 
      id: 6, 
      category: 'ACCOMMODATION', 
      image: accom1, 
      title: 'Arch', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-6 col-span-full'
    },
    { 
      id: 10, 
      category: 'ADVENTURE', 
      image: teagarden, 
      title: 'green', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-6 col-span-full'
    },
    { 
      id: 11, 
      category: 'ACCOMMODATION', 
      image: toycars, 
      title: 'TOY', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 12, 
      category: 'ACCOMMODATION', 
      image: city, 
      title: 'CITY', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 13, 
      category: 'ACCOMMODATION', 
      image: bhongir, 
      title: 'FORT', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 14, 
      category: 'ACCOMMODATION', 
      image: fire, 
      title: 'FIRE', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 15, 
      category: 'ACCOMMODATION', 
      image: train, 
      title: 'TRAIN', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 16, 
      category: 'ADVENTURE', 
      image: sunsetflower, 
      title: 'SUNSET', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 20, 
      category: 'ADVENTURE', 
      image: fishing, 
      title: 'LAKE', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 21, 
      category: 'ADVENTURE', 
      image: stick1, 
      title: 'WALLPAPER', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-6 col-span-full'
    },
    { 
      id: 23, 
      category: 'ADVENTURE', 
      image: costal, 
      title: 'COSTAL', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 24, 
      category: 'ADVENTURE', 
      image: hoodie, 
      title: 'vibe', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 25, 
      category: 'ADVENTURE', 
      image: kview, 
      title: 'VIEW', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 26, 
      category: 'ADVENTURE', 
      image: kview1, 
      title: 'VIEW', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 27, 
      category: 'ADVENTURE', 
      image: re, 
      title: 'BIKE', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 28, 
      category: 'ADVENTURE', 
      image: munnartext, 
      title: 'MUNNAR', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 29, 
      category: 'ADVENTURE', 
      image: seaman, 
      title: 'BEACH', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 30, 
      category: 'ADVENTURE', 
      image: sflower, 
      title: 'fLOWERS', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 31, 
      category: 'ADVENTURE', 
      image: ski, 
      title: 'SKY', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 32, 
      category: 'ADVENTURE', 
      image: varkalafortbeach, 
      title: 'VIEW', 
      type: 'ADVENTURE', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
    { 
      id: 17, 
      category: 'ACCOMMODATION', 
      image: drinks, 
      title: 'DRINKS', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 18, 
      category: 'ACCOMMODATION', 
      image: teaglass, 
      title: 'TEA', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 19, 
      category: 'ACCOMMODATION', 
      image: perfume, 
      title: 'PERFUME', 
      type: 'ACCOMMODATION', 
      className: 'md:col-span-2 md:row-span-2 col-span-full'
    },
   

    { 
      id: 7, 
      category: 'PEOPLE', 
      image: jacksparrow, 
      title: 'Dress UP', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 8, 
      category: 'PEOPLE', 
      image: natura, 
      title: 'Natural Look', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
    },
    { 
      id: 9, 
      category: 'PEOPLE', 
      image: glamour, 
      title: 'F walk', 
      type: 'PEOPLE', 
      className: 'md:col-span-2 md:row-span-4 col-span-full'
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