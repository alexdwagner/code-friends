import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const MobileNav = () => {
  return (
    <div className="fixed bothrefm-0 left-0 w-full sm:hidden bg-white flex justify-around items-center p-4 shadow-md" style={{ height: '78px' }}>
      <Link href="/" className="text-gray-600 hover:text-gray-900">
        <FontAwesomeIcon icon={faHome} />
        <div>Home</div>
      </Link>
      <Link href="/discover" className="text-gray-600 hover:text-gray-900">
        <FontAwesomeIcon icon={faSearch} />
        <div>Discover</div>
      </Link>
      <Link href="/notifications" className="text-gray-600 hover:text-gray-900">
        <FontAwesomeIcon icon={faBell} />
        <div>Notifications</div>
      </Link>
      <Link href="/me" className="text-gray-600 hover:text-gray-900">
        <FontAwesomeIcon icon={faUser} />
        <div>Me</div>
      </Link>
    </div>
  );
};

export default MobileNav;
