import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="header bg-gray-100 p-4">
      <FontAwesomeIcon icon={faBars} width="24" height="24" className="ml-4" />
    </header>
  );
};

export default Header;
