import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface MobileNavProps {
  isAuthenticated: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isAuthenticated }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full sm:hidden bg-white flex justify-around items-center p-4 shadow-md" style={{ height: '78px' }}>
      <Link href="/">
        <a className="text-gray-600 hover:text-gray-900">
          <FontAwesomeIcon icon={faHome} />
          <div>Home</div>
        </a>
      </Link>
      <Link href="/discover">
        <a className="text-gray-600 hover:text-gray-900">
          <FontAwesomeIcon icon={faSearch} />
          <div>Discover</div>
        </a>
      </Link>
      {isAuthenticated && (
        <Link href="/create">
          <a className="text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faPlus} />
          </a>
        </Link>
      )}
      <Link href="/notifications">
        <a className="text-gray-600 hover:text-gray-900">
          <FontAwesomeIcon icon={faBell} />
          <div>Notifications</div>
        </a>
      </Link>
      <Link href="/me">
        <a className="text-gray-600 hover:text-gray-900">
          <FontAwesomeIcon icon={faUser} />
          <div>Me</div>
        </a>
      </Link>
    </div>
  );
};

export default MobileNav;
