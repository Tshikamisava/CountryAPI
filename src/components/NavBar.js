// Navbar.js

import React, { useState } from 'react';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Website</div>
        <div>
          <button
            className="text-white px-4 py-2 rounded focus:outline-none"
            onClick={toggleTheme}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
