import React from 'react';

const iPhone14ProLanding = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header/Navigation */}
      <header className="navbar bg-white px-6 lg:px-16">
        <div className="navbar-start">
          <div className="text-2xl font-bold text-black">cyber</div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-600">
            <li><a className="text-black font-semibold">Home</a></li>
            <li><a className="hover:text-black">About</a></li>
            <li><a className="hover:text-black">Contact Us</a></li>
            <li><a className="hover:text-black">Blog</a></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          <div className="flex items-center space-x-4">
            {/* Search icon */}
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-64 bg-gray-100" />
            </div>
            {/* Heart icon */}
            <button className="btn btn-ghost btn-circle">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            {/* Cart icon */}
            <button className="btn btn-ghost btn-circle">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6-5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
              </svg>
            </button>
            {/* User icon */}
            <button className="btn btn-ghost btn-circle">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex items-center min-h-[calc(100vh-80px)] px-6 lg:px-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Pro.Beyond. */}
              <div className="text-lg text-gray-400 tracking-wider">
                Pro.Beyond.
              </div>
              
              {/* Main Heading */}
              <h1 className="text-6xl lg:text-7xl font-light leading-none">
                IPhone 14 <span className="font-bold">Pro</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Created to change everything for the better. For everyone
              </p>
              
              {/* CTA Button */}
              <button className="btn btn-outline btn-white border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium rounded-none">
                Shop Now
              </button>
            </div>
            
            {/* Right Content - iPhone Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* iPhone 14 Pro Mockup */}
                <div className="w-80 h-[600px] bg-gradient-to-br from-gray-800 to-black rounded-[60px] shadow-2xl border-8 border-gray-700 relative overflow-hidden">
                  {/* Screen */}
                  <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-[45px] flex flex-col">
                    {/* Dynamic Island */}
                    <div className="w-32 h-8 bg-black rounded-full mx-auto mt-4"></div>
                    
                    {/* Screen Content */}
                    <div className="flex-1 flex flex-col justify-center items-center text-white p-8">
                      <div className="text-sm text-purple-200 mb-2">Monday, June 6</div>
                      <div className="text-6xl font-thin">9:41</div>
                    </div>
                  </div>
                  
                  {/* Camera System */}
                  <div className="absolute top-6 left-6 w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-4 h-4 bg-gray-600 rounded-full border border-gray-500"></div>
                      <div className="w-4 h-4 bg-gray-600 rounded-full border border-gray-500"></div>
                      <div className="w-4 h-4 bg-gray-600 rounded-full border border-gray-500"></div>
                      <div className="w-3 h-3 bg-gray-700 rounded-sm ml-1 mt-1"></div>
                    </div>
                  </div>
                  
                  {/* Side Buttons */}
                  <div className="absolute left-0 top-32 w-1 h-12 bg-gray-600 rounded-r"></div>
                  <div className="absolute left-0 top-48 w-1 h-8 bg-gray-600 rounded-r"></div>
                  <div className="absolute left-0 top-60 w-1 h-8 bg-gray-600 rounded-r"></div>
                  <div className="absolute right-0 top-40 w-1 h-16 bg-gray-600 rounded-l"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default iPhone14ProLanding;