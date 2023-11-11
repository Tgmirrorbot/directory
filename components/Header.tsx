import React from 'react';

type HeaderProps = {
  search: string;
  setSearch: (search: string) => void;
};

const Header: React.FC<HeaderProps> = ({ search, setSearch }) => {
  return (
    <header className="w-full p-5 flex justify-between items-center bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Discover Web App</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-md p-2"
      />
    </header>
  );
};

export default Header;