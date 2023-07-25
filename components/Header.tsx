import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faBars} width="24" height="24" className="mr-2.5" />
    </header>
  );
};

export default Header;
