import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {container} from './../config/motion.config';

const Header = () => {

  return (
    <header className="bg-gray-900 body-font" style={{height: '10%'}}>
      <motion.div
        className="flex items-center justify-between p-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Link
          to={'/'}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Passenger Pack</span>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
