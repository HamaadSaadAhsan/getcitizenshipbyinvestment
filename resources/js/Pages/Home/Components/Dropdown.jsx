import React, {useState, useRef, useEffect, forwardRef} from 'react';
import {Link} from '@inertiajs/react';

const Dropdown = forwardRef(({ category }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    console.log(window.location.pathname)

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`p-3 ${
            route().current('category.*')
                ? "active-link"
                : ""
        }`} ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center mb-0">
                <span className="mr-2 text-[14px]">{category.name}</span>
                <svg
                    className={`w-3 h-3 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                {category.children.map((child) => (
                    <Link
                        key={child.id}
                        href={ route('category.show', child.slug)}
                        className={`nav-link block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-200`}
                    >
                        {child.name}
                    </Link>
                ))}
            </div>
        </div>
    );
});

export default Dropdown;
