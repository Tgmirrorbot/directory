import React from 'react';

type WebAppCardProps = {
  name: string;
  description: string;
  url: string;
  isPopular: boolean;
  openPopup: () => void;
};

const WebAppCard: React.FC<WebAppCardProps> = ({ name, description, url, isPopular, openPopup }) => {
  return (
    <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-5 mb-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      {isPopular && <span role="img" aria-label="fire" className="absolute top-2 right-2">🔥</span>}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
      <button onClick={openPopup} className="px-3 py-1 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 dark:text-white">More Info</button>
    </div>
  );
};

export default WebAppCard;