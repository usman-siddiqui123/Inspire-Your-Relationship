import React, { useState } from "react";
import leftLogo from "../assets/header logo.png"; // left side logo
import rightLogo from "../assets/header.png"; // right side logo

export default function Header() {
    // Mobile navigation menu ke liye state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation links array for easier mapping
    const navLinks = [
        { name: 'For Women', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Testimonials', href: '#' },
        { name: 'Paywall to Purchase Course', href: '#' },
    ];

    return (
        // Header container: Mobile/Desktop dono par transparent aur top par
        <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10 py-4">
            
            <div className="flex items-center justify-between">
                
                {/* Left Logo (Always visible) */}
                <img 
                    src={leftLogo} 
                    alt="Left Logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer" 
                />

                {/* Center Navigation - Desktop View */}
                {/* Mobile par hidden (hidden), Large screens par flex (lg:flex) */}
                <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-md font-medium text-white">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-fuchsia-400 transition whitespace-nowrap">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Logo + Text - Mobile par thoda chhota */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <img 
                        src={rightLogo} 
                        alt="Right Logo" 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" 
                    />
                    <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                        Rosy Marten
                    </span>

                    {/* Hamburger Menu Button - Desktop par hidden (lg:hidden) */}
                    <button 
                        className="p-2 lg:hidden text-white ml-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            // Close Icon (X)
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {/* Jab isMenuOpen true ho tab hi dikhega */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="flex flex-col space-y-2 p-4 bg-black bg-opacity-80 rounded-lg shadow-xl">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="py-2 px-3 text-white text-sm hover:bg-fuchsia-700 hover:text-white rounded-md transition duration-150"
                            onClick={() => setIsMenuOpen(false)} // Click ke baad menu band ho jayega
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

        </header>
    );
}