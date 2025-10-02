import React from 'react';
// 🚨 Zaroori: Apne logo ka path check karein
import logo from '../assets/header logo.png'; // Assuming your logo is in assets/header logo.png

// Pages ke links jinka data dikhana hai
const footerLinks = [
    { section: 'Pages', links: ['FOR WOMEN', 'ABOUT', 'LOGIN', 'FAQ', 'CONTACT', 'TESTIMONIALS'] },
];

export default function Footer() {
    // Function to scroll to thegit add . top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        // Footer ka main container. Dark background aur padding
        <footer className="bg-[#101010] text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Content: Logo, Links, and To Top Button */}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    
                    {/* Left Section: Logo and Alliance Name */}
                    {/* Mobile par center align karne ke liye: items-center aur text-center use kiya hai */}
                    <div className="mb-8 md:mb-0 w-full md:w-1/3 flex flex-col items-center md:items-start">
                        <img 
                            src={logo} 
                            alt="Mistress Wife Alliance Logo" 
                            // Logo size ko thoda increase kiya hai (w-30 invalid hai, w-20 use kiya)
                            className="w-20 h-auto opacity-70"
                        />
                        <p className="text-gray-400 text-center md:text-left text-xs uppercase tracking-widest mt-2">
                            MISTRESS WIFE ALLIANCE
                        </p>
                    </div>

                    {/* Middle Section: Pages Links (2 columns) */}
                    {/* Mobile par padding aur full width di gayi hai */}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        {footerLinks.map((item, index) => (
                            <div key={index} className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-4 border-b-2 border-fuchsia-600 inline-block">
                                    {item.section}
                                </h3>
                                {/* Links ko 2 column mein divide karne ke liye grid */}
                                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400 mt-4">
                                    {item.links.map((link, linkIndex) => (
                                        <a 
                                            key={linkIndex} 
                                            href="#" 
                                            // Mobile par links ko center karne ke liye
                                            className="hover:text-fuchsia-600 transition duration-150 uppercase text-center md:text-left"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Section: To Top Arrow */}
                    {/* Mobile par neeche center mein dikhega, Desktop par right mein */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <div className="flex flex-col items-center">
                            <p className="text-sm text-gray-400 mb-2">TO TOP</p>
                            <button
                                onClick={scrollToTop}
                                className="w-10 h-10 rounded-full border-2 border-fuchsia-600 text-fuchsia-600 flex items-center justify-center hover:bg-fuchsia-600 hover:text-white transition duration-200"
                                aria-label="Back to top"
                            >
                                {/* Arrow Up Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5l7.5-7.5 7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright and Footer Line */}
                <div className="mt-12 pt-4 border-t border-gray-900 text-center">
                    <p className="text-xs text-gray-600">
                        © 2024 Made by VVIP Built Tech Solutions.
                    </p>
                </div>

            </div>
        </footer>
    );
}