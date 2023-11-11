import React from 'react';

type WebAppCardProps = {
  name: string;
  description: string;
  url: string;
};

const WebAppCard: React.FC<WebAppCardProps> = ({ name, description, url }) => {
  return (
    <div className="p-5 mb-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{name}</h2>
      <p className="mb-3 text-gray-600 dark:text-gray-300">{description}</p>
      <a href={url} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 dark:text-white">Visit Site</a>
    </div>
  );
};

export default WebAppCard;