import React from 'react';

type HeaderProps = {
  search: string;
  setSearch: (search: string) => void;
  popular: boolean;
  setPopular: (popular: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({ search, setSearch, popular, setPopular }) => {
  return (
    <header className="w-full p-5 flex justify-between items-center bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">App Title</h1>
      <div className="flex items-center space-x-4 lg:space-x-10">
        <label className="flex items-center">
          <span className="mr-2 text-gray-700">Popular</span>
          <input
            type="checkbox"
            checked={popular}
            onChange={(e) => setPopular(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </label>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md p-2 w-40"
        />
      </div>
    </header>
  );
};

export default Header;