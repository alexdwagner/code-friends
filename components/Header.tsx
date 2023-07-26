import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="header bg-gray-100 p-4 flex justify-between items-center">
      <FontAwesomeIcon icon={faBars} width="24" height="24" className="ml-4" />
      
      <div className="relative group flex items-center">
        <Link href="/create">
          <a className="group-hover:underline flex items-center">
            <span className="absolute right-full mr-2 p-2 bg-white text-gray-800 text-xs rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Create a post
            </span>
            <FontAwesomeIcon icon={faPlus} width="24" height="24" className="mr-4" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
