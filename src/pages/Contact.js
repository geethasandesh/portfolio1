import React, { useState, useEffect } from "react";

const Contact = () => {
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
    <div className={`min-h-screen flex flex-col items-center justify-center py-8 transition-all ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl font-bold mb-4">CONTACT ME</h1>
      <div className={`bg-gray-200 text-black p-8 rounded-lg shadow-lg w-4/5 md:w-1/2 h-72 flex flex-col justify-between transition-all ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
        <h2 className="text-xl font-semibold mb-2">Contact Details</h2>

        <p className="mb-1">
          MAIL :{" "}
          <a href="mailto:geetandesh09@gmail.com" className="hover:underline">
            geethasandesh09@gmail.com
          </a>
        </p>
        <p className="mb-1">NUMBER : 8522997578</p>
        <p className="mb-4">NAME : Sandesh</p>
        <p className="text-center">
          "Your journey with us begins with a simple message. Say HELLO!"
        </p>
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

export default Contact;
