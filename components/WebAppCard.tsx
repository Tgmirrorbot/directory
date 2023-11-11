import React from 'react';

type WebAppCardProps = {
  name: string;
  description: string;
  url: string;
};

const WebAppCard: React.FC<WebAppCardProps> = ({ name, description, url }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-5">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-3">{description}</p>
      <a href={url} className="text-blue-500 hover:underline">Visit Site</a>
    </div>
  );
};

export default WebAppCard;