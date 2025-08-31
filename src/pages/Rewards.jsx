import React from "react";

// Mock icon components for visual appeal. In a real project, you would import these from a library like lucide-react.
const LucideIcon = ({ icon, className }) => {
  const icons = {
    star: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    gift: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="8" width="18" height="13" rx="2" ry="2" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="7" y1="12" x2="17" y2="12" />
      </svg>
    ),
    badge: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 4.78 4.77 4 4 0 0 1-4.78 4.77 4 4 0 0 1-4.78-4.77Z" />
        <path d="M15.42 15.86a4 4 0 0 1-4.78 4.77 4 4 0 0 1-4.78-4.77 4 4 0 0 1 4.78-4.77 4 4 0 0 1 4.78 4.77Z" />
        <path d="M12 12.23a4 4 0 0 1-4.78 4.77 4 4 0 0 1-4.78-4.77 4 4 0 0 1 4.78-4.77 4 4 0 0 1 4.78 4.77Z" />
      </svg>
    )
  };
  return icons[icon] || null;
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-lime-100 p-4 sm:p-6 md:p-12 font-sans text-gray-800 flex items-center justify-center">
      <div className="w-full max-w-4xl backdrop-blur-sm bg-white/30 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-white/20">
        
        {/* Rewards Program Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-900 mb-4 leading-tight drop-shadow-lg">
            Sweet Rewards
          </h1>
          <p className="text-lg text-gray-700 drop-shadow-sm font-medium max-w-xl mx-auto">
            Become a part of our loyalty program and earn points for every purchase to unlock exclusive discounts and perks.
          </p>
        </div>

        {/* Reward Tiers Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Bronze Tier */}
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30 flex flex-col items-center text-center space-y-4">
            <LucideIcon icon="badge" className="w-12 h-12 text-gray-500" />
            <h3 className="text-2xl font-bold text-gray-800">Bronze Tier</h3>
            <p className="text-base text-gray-600">
              Start earning points with every purchase.
            </p>
            <ul className="text-left text-sm text-gray-700 space-y-2 w-full">
              <li>• 1 point for every $1 spent</li>
              <li>• Access to member-only promotions</li>
            </ul>
          </div>
          {/* Silver Tier */}
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30 flex flex-col items-center text-center space-y-4">
            <LucideIcon icon="star" className="w-12 h-12 text-lime-600" />
            <h3 className="text-2xl font-bold text-gray-800">Silver Tier</h3>
            <p className="text-base text-gray-600">
              Unlock greater rewards and more points.
            </p>
            <ul className="text-left text-sm text-gray-700 space-y-2 w-full">
              <li>• 1.5 points for every $1 spent</li>
              <li>• Early access to new products</li>
              <li>• Birthday reward</li>
            </ul>
          </div>
          {/* Gold Tier */}
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30 flex flex-col items-center text-center space-y-4">
            <LucideIcon icon="gift" className="w-12 h-12 text-amber-500" />
            <h3 className="text-2xl font-bold text-gray-800">Gold Tier</h3>
            <p className="text-base text-gray-600">
              The highest level of rewards and perks.
            </p>
            <ul className="text-left text-sm text-gray-700 space-y-2 w-full">
              <li>• 2 points for every $1 spent</li>
              <li>• Free shipping on all orders</li>
              <li>• Exclusive yearly gift</li>
            </ul>
          </div>
        </div>

        {/* How to Join Section */}
        <div className="text-center mt-12 bg-white/50 p-8 rounded-2xl shadow-inner border border-white/30">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mb-4">
            Join the Club
          </h3>
          <p className="text-gray-800 text-lg mb-6 max-w-xl mx-auto">
            Ready to get started? Sign up for our rewards program today and start earning points on your first purchase.
          </p>
          <a href="#" className="inline-block px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
}
