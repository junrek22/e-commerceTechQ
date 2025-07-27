import React, { useState } from 'react';

const ModernNavigation = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-white shadow-lg px-4 lg:px-8 py-2 sticky top-0 z-50">
      {/* Mobile Menu Button */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border"
            >
              <li><a className="font-medium hover:bg-blue-50 hover:text-blue-600">Home</a></li>
              <li><a className="font-medium hover:bg-blue-50 hover:text-blue-600">About</a></li>
              <li><a className="font-medium hover:bg-blue-50 hover:text-blue-600">Contact Us</a></li>
              <li><a className="font-medium hover:bg-blue-50 hover:text-blue-600">Blogs</a></li>
            </ul>
          )}
        </div>

        {/* Brand Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TechStore
          </span>
        </div>
      </div>

      {/* Center Navigation - Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <a className="font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg px-4 py-2">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a className="font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg px-4 py-2">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              About
            </a>
          </li>
          <li>
            <a className="font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg px-4 py-2">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Contact Us
            </a>
          </li>
          <li>
            <a className="font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg px-4 py-2">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Blogs
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side Actions */}
      <div className="navbar-end">
        <div className="flex items-center space-x-3">
          {/* Search Bar */}
          <div className={`form-control transition-all duration-300 ${isSearchFocused ? 'w-72' : 'w-64'} hidden md:block`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className={`input input-bordered w-full pl-10 pr-4 bg-gray-50 border-gray-200 focus:border-blue-400 focus:bg-white transition-all duration-200 ${
                  isSearchFocused ? 'shadow-lg' : ''
                }`}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <svg
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Search Button */}
          <button className="btn btn-ghost btn-circle md:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Heart/Wishlist Button */}
          <div className="tooltip tooltip-bottom" data-tip="Wishlist">
            <button className="btn btn-ghost btn-circle hover:bg-red-50 hover:text-red-500 transition-all duration-200 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="badge badge-sm badge-error absolute -top-1 -right-1 text-white">2</span>
            </button>
          </div>

          {/* Cart Button */}
          <div className="tooltip tooltip-bottom" data-tip="Shopping Cart">
            <button className="btn btn-ghost btn-circle hover:bg-green-50 hover:text-green-600 transition-all duration-200 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6-5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2"
                />
              </svg>
              {cartCount > 0 && (
                <span className="badge badge-sm badge-primary absolute -top-1 -right-1 text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div className="tooltip tooltip-bottom" data-tip="Profile">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-blue-50 transition-all duration-200">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border"
            >
              <li className="menu-title">
                <span className="text-gray-500">Account</span>
              </li>
              <li>
                <a className="justify-between hover:bg-blue-50 hover:text-blue-600">
                  Profile
                  <span className="badge badge-sm badge-ghost">New</span>
                </a>
              </li>
              <li><a className="hover:bg-blue-50 hover:text-blue-600">Settings</a></li>
              <li><a className="hover:bg-blue-50 hover:text-blue-600">Orders</a></li>
              <li><a className="hover:bg-blue-50 hover:text-blue-600">Help Center</a></li>
              <div className="divider my-1"></div>
              <li><a className="text-red-500 hover:bg-red-50">Logout</a></li>
            </ul>
          </div>

          {/* CTA Button */}
          <button className="btn btn-primary hidden lg:flex bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModernNavigation;