import React from 'react';

type HeaderProps = {
  search: string;
  setSearch: (search: string) => void;
  filterPopular: boolean;
  setFilterPopular: (filterPopular: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ search, setSearch, filterPopular, setFilterPopular }) => {
  return (
    <header className="w-full p-5 flex justify-between items-center bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Discover Web App</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md p-2"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filterPopular}
            onChange={(e) => setFilterPopular(e.target.checked)}
            className="mr-2"
          />
          <span>Popular</span>
        </label>
      </div>
    </header>
  );
};

export default Header;