import React from "react";

// Mock icon components for visual appeal. In a real project, you would import these from a library like lucide-react.
const LucideIcon = ({ icon, className }) => {
  const icons = {
    rocket: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4.5 16.5c-1.3-1.3-2.5-4-1-6.5C4.2 8.7 5.7 6.8 6.5 6c2-2 4.4-2.8 7-2.6S18.5 4.5 20 6c1.5 1.5 2.5 3.5 2 6-1 5-4.5 8.5-9 9-2-2-2-4.5-2-6.5S9.5 12.5 11 11" />
        <path d="M11 11c-1.5 1.5-2.5 3.5-2 6" />
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  };
  return icons[icon] || null;
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-100 p-4 sm:p-6 md:p-12 font-sans text-gray-800 flex items-center justify-center">
      <div className="w-full max-w-4xl backdrop-blur-sm bg-white/30 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-white/20">
        
        {/* About Us Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-md">
            Our Story
          </h1>
          <p className="text-lg text-white/90 drop-shadow-sm font-medium">
            Discover the passion and purpose behind our premium products.
          </p>
          {/* A small story added here */}
          <p className="mt-4 text-base sm:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Our journey began with a simple belief: that nature's purest gifts should be shared with the world. We traveled to the breathtaking landscapes of New Zealand, where we discovered the rich, golden goodness of Manuka Honey, meticulously crafted by nature's finest pollinators. We work directly with local beekeepers who share our commitment to ethical, sustainable practices, ensuring every jar is a true reflection of its origin.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30 flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <LucideIcon icon="rocket" className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />
              <h2 className="text-2xl font-bold text-orange-600">Our Mission</h2>
            </div>
            <p className="text-gray-800 text-base leading-relaxed">
              We are dedicated to bringing you authentic, premium Manuka Honey sourced directly from the pristine landscapes of New Zealand. Our mission is to promote wellness and sustainability, ensuring every jar is a testament to nature's purity and our commitment to quality.
            </p>
          </div>
          
          {/* Values Section */}
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30 flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <LucideIcon icon="users" className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />
              <h2 className="text-2xl font-bold text-orange-600">Our Values</h2>
            </div>
            <p className="text-gray-800 text-base leading-relaxed">
              At our core, we believe in transparency, integrity, and respect for nature. We work closely with local beekeepers who share our values, and we meticulously test our products to guarantee their authenticity and potency.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12 bg-white/50 p-8 rounded-2xl shadow-inner border border-white/30">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-4">
            Join Our Journey
          </h3>
          <p className="text-gray-800 text-lg mb-6 max-w-xl mx-auto">
            Explore our range of products and experience the pure taste of New Zealand.
          </p>
          <a href="#" className="inline-block px-8 py-4 text-lg font-bold text-white bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
