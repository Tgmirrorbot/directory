import React from 'react';

type WebAppCardProps = {
  name: string;
  description: string;
  url: string;
};

const WebAppCard: React.FC<WebAppCardProps> = ({ name, description, url }) => {
  return (
    <div className="p-5 mb-5 border border-gray-200 rounded-lg">
      <h2 className="mb-2 text-xl font-bold">{name}</h2>
      <p className="mb-3 text-gray-600">{description}</p>
      <a href={url} className="text-blue-500 hover:underline">Visit Site</a>
    </div>
  );
};

export default WebAppCard;