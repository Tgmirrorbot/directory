import React from 'react';
import { FaTwitter, FaGithub, FaProductHunt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full p-5 flex justify-center items-center bg-white dark:bg-gray-800">
      <div className="flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-500 dark:text-white" size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-black dark:text-white" size={24} />
        </a>
        <a href="https://producthunt.com" target="_blank" rel="noopener noreferrer">
          <FaProductHunt className="text-orange-500 dark:text-white" size={24} />
        </a>
      </div>
      <p className="text-sm ml-4">© 2023 Discover Web App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;