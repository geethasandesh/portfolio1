import React, { useState, useEffect } from "react";
import me from "../Images/me.JPG";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 ${isDarkMode ? 'bg-black' : 'bg-white'} transition-all`}>
      {/* About Me Title */}
      <h1 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'} text-center md:text-left w-full max-w-[900px]`}>
        ABOUT ME
      </h1>

      {/* About Box */}
      <div className={`w-full max-w-[900px] min-h-[400px] rounded-lg flex flex-col md:flex-row items-center shadow-lg relative z-10 mt-4 p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        {/* Image with responsive sizing */}
        <div className="w-full md:w-60 mb-4 md:mb-0 flex justify-center md:justify-start">
          <img
            src={me}
            alt="Me"
            className="w-48 md:w-60 h-auto rounded-lg shadow-md"
          />
        </div>

        {/* About Me Text */}
        <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} md:ml-4 text-center md:text-left`}>
          <h2 className="text-lg md:text-xl">
            Hello! I'm a passionate photographer with a keen interest in
            filmmaking. My journey in visual storytelling began with
            photography, and over time, I expanded my skills into video editing
            and cinematography. As a student, I am constantly learning and
            evolving; I love capturing moments that tell a story and convey
            emotions, whether through still images or moving pictures !! 
          </h2>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button 
        className="fixed bottom-4 left-4 md:bottom-8 md:left-8 bg-gray-300 rounded-full p-3 hover:bg-opacity-70 transition-all duration-300"
        aria-label="Toggle dark mode"
        onClick={toggleDarkMode}
      >
        <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
      </button>
    </div>
  );
};

export default About;