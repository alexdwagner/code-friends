// components/Nav.tsx

import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative">
            <FontAwesomeIcon icon={faBars} width="24" height="24" onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
                <ul className="absolute left-0 mt-2 space-y-2 bg-white text-blue-600 border border-gray-200 rounded shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <Link href="/" legacyBehavior>
                            <a onClick={() => setIsOpen(false)}>Home</a>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <Link href="/about" legacyBehavior>
                            <a onClick={() => setIsOpen(false)}>About</a>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <Link href="/posts" legacyBehavior>
                            <a onClick={() => setIsOpen(false)}>Posts</a>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <Link href="/categories" legacyBehavior>
                            <a onClick={() => setIsOpen(false)}>Categories</a>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;
