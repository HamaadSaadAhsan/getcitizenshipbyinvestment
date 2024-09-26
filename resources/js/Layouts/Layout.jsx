import React from "react";
import { Link } from "@inertiajs/react";
import Logo from "./logo/CBILogoWhite";

const Layout = ({ children, categories }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-black text-white sticky top-0 z-50">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <button aria-label="Open menu" className="md:hidden">
                            <svg
                                viewBox="0 0 32 32"
                                width="20"
                                height="20"
                                className="fill-current"
                            >
                                <path d="M1 7.5h30V1.9H1v5.6zm0 22.6h30v-5.6H1v5.6zm0-11.3h30v-5.6H1v5.6z"></path>
                            </svg>
                        </button>
                        <button aria-label="Search BBC" className="md:hidden">
                            <svg
                                viewBox="0 0 32 32"
                                width="20"
                                height="20"
                                className="fill-current"
                            >
                                <path d="m30.6 28.1-8.3-8.3c1.5-2 2.4-4.4 2.4-7.2C24.7 6 19.6 1 13 1S1.4 6.1 1.4 12.7 6.5 24.3 13 24.3c2.3 0 4.4-.6 6.2-1.8l8.5 8.5 2.9-2.9zM4 12.6c0-5.2 3.9-9.1 9-9.1s9 3.9 9 9.1c0 5.2-3.9 9.1-9 9.1s-9-3.9-9-9.1z"></path>
                            </svg>
                        </button>
                        <Link href="/" className="flex-shrink-0">
                            <Logo />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {categories.filter(category => category.is_visible_on_nav).map((category) => (
                            <Link key={category.id} href={`/category/${category.slug}`} className="text-white hover:text-gray-400">
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>

            <main className="flex-grow">{children}</main>

            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    {/* Add footer content here */}
                    <p className="text-center">
                        &copy; 2024 BBC. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
