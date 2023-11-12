import React from 'react';

type PopupProps = {
  name: string;
  description: string;
  longDescription: string;
  url: string;
  closePopup: () => void;
};

const Popup: React.FC<PopupProps> = ({ name, description, longDescription, url, closePopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 w-11/12 md:w-3/4 lg:w-1/2">
        <button onClick={closePopup} className="float-right text-gray-500 hover:text-gray-700">X</button>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{longDescription}</p>
        <a href={url} className="px-3 py-1 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 dark:text-white">Visit Site</a>
      </div>
    </div>
  );
};

export default Popup;