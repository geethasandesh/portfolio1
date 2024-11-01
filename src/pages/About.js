import React, { useState, useEffect } from "react";
import me from "../Images/me.JPG"; // Ensure the image path is correct

const About = () => {
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
    <div className={`flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} transition-all`}>
      {/* About Me Title */}
      <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'} text-left`}>ABOUT ME</h1>

      {/* About Box */}
      <div className={`w-[900px] h-[400px] rounded-lg flex items-center shadow-lg relative z-10 mt-4 p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        {/* Image inside the pale box */}
        <img
          src={me}
          alt="Me"
          className="w-60 h-auto rounded-lg shadow-md mr-4"
        />
        {/* About Me Text */}
        <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
          <h2 className="text-xl">
            Hello! I’m a passionate photographer with a keen interest in
            filmmaking. My journey in visual storytelling began with
            photography, and over time, I expanded my skills into video editing
            and cinematography. As a student, I am constantly learning and
            evolving; I love capturing moments that tell a story and convey
            emotions, whether through still images or moving pictures! 
          </h2>
        </div>
      </div>

      {/* Dark Mode Toggle */}
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

export default About;
