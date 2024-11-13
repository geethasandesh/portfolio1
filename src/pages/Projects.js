import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: "Wedding Event",
    description: "This project involved capturing the essence of love and celebration during a wedding. We focused on creating a personalized experience for the couple and their guests by using a combination of candid shots and posed portraits. To attract customers, we emphasized storytelling through our photography, showcasing the emotional moments and intricate details of the event. By offering customized packages and providing a seamless consultation process, we ensured that every couple felt valued and heard, leading to referrals and repeat business."
  },
  {
    name: "Fashion Photography",
    description: "In this project, we collaborated with local designers to highlight their unique collections through stunning visuals. Our approach was to create an atmosphere that resonated with the target audience, using vibrant backgrounds and dynamic poses to bring the clothing to life. To attract customers, we utilized social media marketing, showcasing behind-the-scenes content and engaging fashion enthusiasts through interactive posts. By establishing partnerships with influencers and fashion bloggers, we expanded our reach and created a buzz around the brand, resulting in increased visibility and sales."
  },
  {
    name: "Street Photography Challenge",
    description: "This project was designed as an immersive challenge to capture the vibrant life and diverse culture of the streets. Participants were encouraged to document their experiences, focusing on candid moments that tell a story. We aimed to attract customers by promoting the challenge through social media platforms, encouraging participants to share their photos with a dedicated hashtag. By creating an online gallery to showcase the best entries, we built a community of passionate photographers, leading to greater engagement and interest in our future projects."
  },
];

const Projects = () => {
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
    <div className={`min-h-screen py-8 transition-all ${isDarkMode ? 'bg-black text-black' : 'bg-white text-black'}`}>
      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="mb-6 p-4 border border-gray-600 rounded-lg" style={{ backgroundColor: isDarkMode ? '#d3d3d3' : '#f7f7f7' }}>
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
      {/* Center the "Works" button with hover effect */}
      <div className="flex justify-center mt-4">
        <Link to="/works">
          <button className="bg-blue-400 text-white px-4 py-2 rounded transition-transform duration-300 hover:bg-blue-500 hover:scale-105">
            Works
          </button>
        </Link>
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

export default Projects;
