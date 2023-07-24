import React from 'react';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="p-4 flex items-center justify-between">
  
      <button
        onClick={toggleTheme}
        className={`ml-4 px-4 py-2 rounded text-white ${
          theme === 'light' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-700 hover:bg-blue-600'
        }`}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;


