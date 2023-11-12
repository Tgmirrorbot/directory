import React from 'react';
import { FaTwitter, FaGithub, FaProductHunt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full p-5 bg-white dark:bg-gray-800">
      <div className="flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-gray-500 dark:text-white">
          <FaTwitter size={24} className="hover:text-blue-500 text-gray-500 dark:text-white" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black text-gray-500 dark:text-white">
          <FaGithub size={24} className="hover:text-black text-gray-500 dark:text-white" />
        </a>
        <a href="https://producthunt.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 text-gray-500 dark:text-white">
          <FaProductHunt size={24} className="hover:text-orange-500 text-gray-500 dark:text-white" />
        </a>
      </div>
      <p className="ml-4 text-sm">© 2023 GPTsZone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;