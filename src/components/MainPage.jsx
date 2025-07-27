import React from 'react';
import ModernNavigation from './ModernNavigation';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ModernNavigation />
      
      {/* Hero Section */}
      <div className="hero min-h-[500px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to TechStore</h1>
            <p className="mb-5 text-lg">
              Discover the latest technology products with our modern and intuitive navigation system.
              Built with React, TailwindCSS, and DaisyUI for the best user experience.
            </p>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Navigation Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Modern Logo & Branding</h3>
                <p className="text-gray-600">
                  Beautiful gradient logo with modern typography that represents your brand identity.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Smart Search</h3>
                <p className="text-gray-600">
                  Advanced search functionality with focus animations and responsive design.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Wishlist Integration</h3>
                <p className="text-gray-600">
                  Heart button with notification badges to save your favorite items.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6-5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Shopping Cart</h3>
                <p className="text-gray-600">
                  Fully functional cart button with item count badges and smooth animations.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">User Profile</h3>
                <p className="text-gray-600">
                  Complete profile dropdown with account management and settings options.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-2">Responsive Design</h3>
                <p className="text-gray-600">
                  Mobile-first design that works perfectly on all devices and screen sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Navigation Menu Items
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Home</h3>
              <p className="text-gray-600">Your main dashboard and starting point for navigation.</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <svg className="w-12 h-12 mx-auto mb-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">About</h3>
              <p className="text-gray-600">Learn more about our company, mission, and values.</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <svg className="w-12 h-12 mx-auto mb-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">Get in touch with our support team for assistance.</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-300">
              <svg className="w-12 h-12 mx-auto mb-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Blogs</h3>
              <p className="text-gray-600">Read our latest articles, tutorials, and industry insights.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-gray-900 text-white">
        <aside>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <p className="font-bold text-xl">TechStore</p>
          <p>Modern React UI with TailwindCSS & DaisyUI</p>
          <p>Copyright © 2024 - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default MainPage;