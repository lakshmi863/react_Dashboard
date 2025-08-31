import React from "react";

// Mock icon components for visual appeal. In a real project, you would import these from a library like lucide-react.
const LucideIcon = ({ icon, className }) => {
  const icons = {
    mail: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
        <path d="M22 6L12 13L2 6"></path>
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2.05l-4.2-1.72a2 2 0 0 1-1.1-1.1l-.3-.72a12.87 12.87 0 0 0-7.32-7.32l-.72-.3a2 2 0 0 1-1.1-1.1L2.05 4.18A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.73l.8 4.8A2 2 0 0 1 8.2 11l-2.5 2.5a10 10 0 0 0 5 5l2.5-2.5a2 2 0 0 1 2.37-.23l4.8.8A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    mapPin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
        <circle cx="12" cy="9" r="3"></circle>
      </svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 4s-.7 2.1-2 3.4c-1.6 1.7-5.4 4.1-9 4.6-2.5.3-4.4-.3-5.2-1.3-.9-1-1.3-2.1-.8-2.6.5-.5 1.5-.7 2.6-.4.9.2 1.9.4 3 .3.4 0 .9-.1 1.4-.2 1.1-.3 2.5-.7 3.8-1.5 2.1-1.3 3.6-3.4 3.6-5.4s-1.5-3-3.6-3.6c-1.3-.8-2.5-1.2-3.8-1.5-1.1-.3-2.2-.4-3.3-.3-1.4.1-2.7.4-4 .9-1.3.5-2.5 1.2-3.6 2.1-1.1.9-2.1 2.1-2.9 3.4-1.6 2.5-2 5.5-1.5 8.5.5 3.3 2.1 6.3 4.5 9.1 2.4 2.8 5.7 5.1 9.4 6.7 3.7 1.6 7.7 2.3 11.7 2.1 4.1-.2 8.1-1.4 11.7-3.7 3.6-2.3 6.6-5.4 8.7-9.4z" />
      </svg>
    )
  };
  return icons[icon] || null;
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-4 sm:p-6 md:p-12 font-sans text-gray-800 flex items-center justify-center">
      <div className="w-full max-w-5xl backdrop-blur-sm bg-white/30 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-white/20">
        
        {/* Contact Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-900 mb-4 leading-tight drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-700 drop-shadow-sm font-medium max-w-xl mx-auto">
            We'd love to hear from you. Whether you have a question about our honey or just want to say hello, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/50 rounded-full shadow-md">
                <LucideIcon icon="mapPin" className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
                <p className="text-gray-600">123 Apiary Lane, Queenstown, New Zealand</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/50 rounded-full shadow-md">
                <LucideIcon icon="phone" className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Phone Number</h3>
                <p className="text-gray-600">+64 9 123 4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white/50 rounded-full shadow-md">
                <LucideIcon icon="mail" className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Email Address</h3>
                <p className="text-gray-600">contact@honeyco.co.nz</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-white/50 rounded-full shadow-md hover:bg-white/70 transition">
                  <LucideIcon icon="instagram" className="w-6 h-6 text-indigo-600" />
                </a>
                <a href="#" className="p-3 bg-white/50 rounded-full shadow-md hover:bg-white/70 transition">
                  <LucideIcon icon="facebook" className="w-6 h-6 text-indigo-600" />
                </a>
                <a href="#" className="p-3 bg-white/50 rounded-full shadow-md hover:bg-white/70 transition">
                  <LucideIcon icon="twitter" className="w-6 h-6 text-indigo-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/50 p-6 rounded-2xl shadow-inner border border-white/30">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/70 transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/70 transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/70 transition-all"></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
