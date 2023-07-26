import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const menuRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const renderMakeAPostButton = () => {
        if (router.pathname === '/posts') {
            return (
                <Link href="/create" legacyBehavior>
                    <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">
                        Make a Post
                    </a>
                </Link>
            );
        }
    }

    return (
        <nav className="relative flex items-center space-x-4 justify-between w-full" ref={menuRef}>
            <FontAwesomeIcon icon={faBars} width="24" height="24" onClick={() => setIsOpen(!isOpen)} />

            {renderMakeAPostButton()}

            <FontAwesomeIcon icon={faBell} width="24" height="24" />

            {isOpen && (
                <ul className="absolute top-full left-0 mt-2 space-y-2 bg-white text-blue-600 border border-gray-200 rounded shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <Link href="/profile" legacyBehavior>
                            <a onClick={() => setIsOpen(false)}>My Account</a>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        <Link href="/posts" legacyBehavior>
                            <a onClick={() => setIsOpen(false)}>Post Feed</a>
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                        {/* Placeholder for logout logic */}
                        <a onClick={() => {
                            setIsOpen(false);
                            // Add logout logic here
                        }}>
                            Logout
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;
