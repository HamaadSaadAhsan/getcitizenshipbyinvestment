import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const Dropdown = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center">
                <span className="mr-2">{category.name}</span>
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 transition-opacity duration-300 ease-in-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transition: 'max-height 0.3s ease-in-out', maxHeight: isOpen ? '200px' : '0' }}
            >
                {category.children.map((child) => (
                    <Link
                        key={child.id}
                        href={`/category/${child.slug}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-200"
                    >
                        {child.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
