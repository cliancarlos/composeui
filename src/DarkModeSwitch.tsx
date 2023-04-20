import React, { useState } from 'react';

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <label htmlFor="" className="flex justify-end items-center gap-4 bg-gray-400 mb-4">
      <span className="text-sm"> Dark mode {isDarkMode ? 'ON' : 'OFF'}</span>
      <button
        onClick={toggleDarkMode}
        className={`w-12 h-6 rounded-full ${isDarkMode ? 'bg-blue-500' : 'bg-gray-300'}  focus:outline-none`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isDarkMode ? 'translate-x-6' : ''
          }`}
        ></div>
      </button>
    </label>
  );
};

export default DarkModeSwitch;
