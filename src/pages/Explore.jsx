import React from "react";

// Mock icon components for visual appeal. In a real project, you would import these from a library like lucide-react.
const LucideIcon = ({ icon, className }) => {
  const icons = {
    package: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    bookOpen: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    userCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    )
  };
  return icons[icon] || null;
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-6 md:p-12 font-sans text-gray-800 flex items-center justify-center">
      <div className="w-full max-w-5xl backdrop-blur-sm bg-white/30 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-white/20">
        
        {/* Explore Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow-lg">
            Explore Our World
          </h1>
          <p className="text-lg text-gray-700 drop-shadow-sm font-medium max-w-xl mx-auto">
            Discover our carefully crafted collections, read inspiring stories, and get to know the people behind the products.
          </p>
        </div>

        {/* Explore Sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Our Collections Section */}
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30 flex flex-col items-center text-center space-y-4">
            <LucideIcon icon="package" className="w-12 h-12 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">Our Collections</h3>
            <p className="text-base text-gray-600">
              Browse our exclusive products, from the classics to our limited edition releases.
            </p>
            <a href="#" className="inline-block px-6 py-2 text-sm font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
              Discover
            </a>
          </div>
          
          {/* Our Stories Section */}
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30 flex flex-col items-center text-center space-y-4">
            <LucideIcon icon="bookOpen" className="w-12 h-12 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">Stories from the Hive</h3>
            <p className="text-base text-gray-600">
              Read about our journey, sustainable practices, and the rich history of our products.
            </p>
            <a href="#" className="inline-block px-6 py-2 text-sm font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
              Read More
            </a>
          </div>
          
          {/* Meet the Makers Section */}
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30 flex flex-col items-center text-center space-y-4">
            <LucideIcon icon="userCheck" className="w-12 h-12 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">Meet the Makers</h3>
            <p className="text-base text-gray-600">
              Learn about the passionate team who bring our vision to life.
            </p>
            <a href="#" className="inline-block px-6 py-2 text-sm font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
              Get to Know Us
            </a>
          </div>
        </div>

        {/* Featured Content Section */}
        <div className="text-center mt-12 bg-white/50 p-8 rounded-2xl shadow-inner border border-white/30">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-4">
            Featured Article: The Story of Our First Harvest
          </h3>
          <p className="text-gray-800 text-lg mb-6 max-w-2xl mx-auto">
            Journey with us to the lush landscapes of New Zealand where our passion for authentic Manuka Honey began.
          </p>
          <a href="#" className="inline-block px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Read the Full Story
          </a>
        </div>
      </div>
    </div>
  );
}
