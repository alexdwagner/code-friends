import React from 'react';
import Nav from './Nav';

const Header: React.FC = () => {
    return (
        <header className="header bg-gray-100 p-4 flex justify-between items-center">
            <Nav />
        </header>
    );
};

export default Header;
