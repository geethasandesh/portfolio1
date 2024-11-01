import React, { useState, useEffect } from 'react';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';

const Home = () => {
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

  // Sample images using local imports
  const images = [
    image1,  // tall image
    image2,  // square image
    image3,  // wide image
    image1,  // tall image (duplicate for example)
    image2,  // square image (duplicate for example)
    image3,  // rectangle image (duplicate for example)
    image1,  // square image (duplicate for example)
    image2   // tall image (duplicate for example)
  ];

  return (
    <div className={`relative min-h-screen p-4 sm:p-6 lg:p-8 ${isDarkMode ? 'bg-black' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto relative">
        {/* Top-left text */}
        <div className="relative md:absolute top-4 md:top-8 left-4 md:left-8 mb-6 md:mb-0">
          <div className="text-base sm:text-lg text-gray-300">Photography by</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mt-2">S A N D E S H</h1>
        </div>

        {/* Top-right text */}
        <div className="relative md:absolute top-4 md:top-8 right-4 md:right-8 text-right mb-8 md:mb-0">
          <div className="text-base sm:text-lg text-gray-300">Let's Work</div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mt-2">TOGETHER</div>
        </div>

        {/* Main Content - Image Grid */}
        <div className="pt-4 md:pt-48 pb-16">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 sm:gap-4 max-w-[1400px] mx-auto">
            {/* Row 1 */}
            <div className="col-span-4 md:col-span-3 md:row-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src={images[0]} 
                  alt="Portrait 1"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img 
                  src={images[1]} 
                  alt="Portrait 2"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-6">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
                <img 
                  src={images[2]} 
                  alt="Portrait 3"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="col-span-4 md:col-span-6">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
                <img 
                  src={images[3]} 
                  alt="Portrait 4"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img 
                  src={images[4]} 
                  alt="Portrait 5"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="col-span-4 md:col-span-3 md:row-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src={images[5]} 
                  alt="Portrait 6"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-6">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
                <img 
                  src={images[6]} 
                  alt="Portrait 7"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img 
                  src={images[7]} 
                  alt="Portrait 8"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button 
        className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-white bg-opacity-10 rounded-full p-3 hover:bg-opacity-20 transition-all duration-300"
        aria-label="Toggle dark mode"
        onClick={toggleDarkMode}
      >
        <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
      </button>
    </div>
  );
};

export default Home;