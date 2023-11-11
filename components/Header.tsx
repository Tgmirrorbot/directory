import React from 'react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full p-5 flex justify-between items-center bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Discover Web App</h1>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded bg-gray-600 text-white"
      >
        Switch to {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
    </header>
  );
};

export default Header;