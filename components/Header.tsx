import React from 'react';

type HeaderProps = {
  search: string;
  setSearch: (search: string) => void;
  popular: boolean;
  setPopular: (popular: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ search, setSearch, popular, setPopular }) => {
  return (
    <header className="flex justify-between items-center w-full p-5 bg-transparent">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">GPTsZone</h1>
      <div className="flex items-center space-x-4 lg:space-x-10">
        <label className="flex items-center">
          <span className="mr-2 text-gray-700 dark:text-white">Popular</span>
          <input
            type="checkbox"
            checked={popular}
            onChange={(e) => setPopular(e.target.checked)}
            className="h-5 w-5 text-blue-600 form-checkbox"
          />
        </label>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-40 p-2 rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;