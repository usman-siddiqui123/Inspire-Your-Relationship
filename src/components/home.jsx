import React from "react";
// 🚨 Zaroori: Apne image paths ko check karein
import heroImage from "../assets/first.jpg"; 
import videoPoster from "../assets/image1.jpg"; 
import videologo from "../assets/videologo.png";

// Star Icon component (Rating ke liye)
const StarIcon = ({ filled }) => (
    <svg 
        className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-500'} cursor-pointer`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.691h4.17c.969 0 1.371 1.24.588 1.81l-3.376 2.45a1 1 0 00-.363 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375-2.45c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.363-1.118L2.059 9.394c-.783-.57-.381-1.81.588-1.81h4.17a1 1 0 00.95-.691l1.286-3.966z" />
    </svg>
);


export default function CoursePageLayout() {
    const rating = 4; // Default rating for stars
    const modules = [
        { name: 'English classes', modulesCount: 12, lessons: [1, 2, 3, 4] },
        { name: 'Mathematic classes', modulesCount: 12, lessons: [] },
        { name: 'Physical classes', modulesCount: 12, lessons: [] },
        { name: 'English classes', modulesCount: 12, lessons: [] },
        { name: 'Mathematic classes', modulesCount: 12, lessons: [] },
        { name: 'Physical classes', modulesCount: 12, lessons: [] },
    ];


    return (
        <div className="bg-black min-h-screen text-white">
            
<section className="relative w-full pt-[56.25%] md:pt-[30%] overflow-hidden"> 
                {/* pt-[56.25%] = 16:9 Aspect Ratio (Mobile) */}
                {/* md:pt-[30%] = Thoda chota Aspect Ratio (Desktop) */}
                <img 
                    src={heroImage} 
                    alt="Hero Image" 
                    // Image ko absolute position karke container ke andar fit kiya
                    className="absolute inset-0 w-full h-full object-cover object-center" 
                />
            </section>

            {/* 2. 'All' / 'Next Topic' Bar */}
            <section className="w-full p-4 bg-black text-white border-b border-gray-700">
                <div className="max-w-7xl mx-auto flex justify-start items-center space-x-8">
                    <h2 className="text-lg font-semibold cursor-pointer text-fuchsia-600">All</h2>
                    <h2 className="text-lg font-semibold cursor-pointer text-gray-400 hover:text-white">Next Topic</h2>
                </div>
                {/* Underline width ko 1/4th kiya gaya hai */}
                <hr className="mt-2 border-fuchsia-600 w-1/4 ml-0" /> 
            </section>

            {/* 3. Main Content Layout (Sidebar + Video + Description) */}
            <section className="flex flex-col md:flex-row">
                
                {/* === Sidebar / Modules (Left Side) === */}
                {/* Sidebar sirf desktop (md) par sticky/fixed hoga */}
                <aside className="w-full md:w-[300px] bg-black border-r border-gray-800 p-4 overflow-y-auto 
                                md:h-screen md:sticky md:top-0">
                    {/* Modules Content */}
                    <div className="flex justify-between items-center mb-6 border-b border-fuchsia-600 pb-2">
                        <h1 className="text-2xl font-bold tracking-wider">Modules</h1>
                        {/* Menu Icon */}
                        <div className="flex flex-col space-y-1 cursor-pointer">
                            <div className="w-6 h-0.5 bg-fuchsia-600"></div>
                            <div className="w-6 h-0.5 bg-fuchsia-600"></div>
                            <div className="w-6 h-0.5 bg-fuchsia-600"></div>
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Course Modules</h2>
                    {modules.map((module, index) => (
                        <div key={index} className="mb-3 border border-gray-800 rounded-lg overflow-hidden">
                            <div className={`p-3 cursor-pointer ${index === 0 ? 'bg-fuchsia-900 bg-opacity-30 border-l-4 border-fuchsia-600' : 'hover:bg-gray-800'}`}>
                                <p className="text-sm font-medium">{module.name}</p>
                                <p className="text-xs text-gray-400">{module.modulesCount} modules</p>
                            </div>
                            {index === 0 && (
                                <div className="p-3 pt-0">
                                    {module.lessons.map((lesson, lessonIndex) => (
                                        <div key={lessonIndex} className="flex items-center justify-between py-2 text-sm border-b border-gray-900 last:border-b-0">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-fuchsia-600 text-lg">•</span>
                                                <span className="text-gray-400 text-xs">Introduction to the User</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <span className="text-gray-400 text-xs">5:35</span>
                                                <span className={`w-2 h-2 rounded-full ${lessonIndex === 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </aside>

                {/* === Main Content (Video Player aur Uske Neeche Description/Review) === */}
                <main className="flex-1 p-4 md:p-8">
                    
                    {/* A. Video Player Section */}
                    <div className="relative w-full aspect-video bg-gray-900 flex justify-center items-center overflow-hidden mb-8">
                        {/* Video Background Image */}
                        <img src={videoPoster} alt="Video Poster" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                        
                        {/* Play Button/Logo */}
                        <div className="relative z-10 w-24 h-24 bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-sm">
                            <img src={videologo} alt="video logo" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>

                </main>
            </section>

            {/* 4. Description/Review Section */}
            <section className="w-full p-4 md:px-12 md:py-8"> 
                
                {/* Plus Icon Button - Jo ki aapki image mein video player ke neeche hai */}
                <div className="flex justify-center md:justify-start mb-8">
                    <button 
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent border-2 border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white transition duration-300"
                    >
                        <span className="text-4xl leading-none font-light">+</span>
                    </button>
                </div>

                {/* Review/Description Section Header */}
                <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
                    <h2 className="text-xl font-semibold">Description</h2> 
                    <div className="w-4 h-4 text-gray-400 cursor-pointer">
                        {/* Collapse Icon (downward arrow) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>

                {/* Review Form Container */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    
                    {/* Top Comment Box (Grey background) */}
                    <div className="bg-gray-700 p-4 mb-4 rounded-lg text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur. Ut id purus in quis. Ac nunc ipsum augue interdum pharetra curabitur molestie ut. Odio elit in in sed. Leo amet ut tortor aliquam nunc mi. Odio natoque ullamcorper habitasse magna?
                    </div>

                    {/* Main Comment / Review Input Area (Light grey/white color jaisa aapki image mein hai) */}
                    <textarea
                        className="w-full p-4 mb-6 rounded-lg bg-gray-200 text-black text-sm border border-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 resize-none"
                        rows="4"
                        placeholder="Type your review or comment here..."
                        defaultValue="Lorem ipsum dolor sit amet consectetur. Ut id purus in quis. Ac nunc ipsum augue interdum pharetra curabitur molestie ut. Odio elit in in sed. Leo amet ut tortor aliquam nunc mi. Odio natoque ullamcorper habitasse magna?"
                    />

                    {/* Bottom Section: Ratings aur Submit Button */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="flex space-x-0.5 mb-4 sm:mb-0">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} filled={i < rating} />
                            ))}
                        </div>
                        <button
                            className="w-full sm:w-auto px-8 py-3 bg-fuchsia-600 text-white font-semibold rounded-lg shadow-md hover:bg-fuchsia-700 transition duration-200 uppercase tracking-wider"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}