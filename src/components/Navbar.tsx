import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../app/store';
import { logout } from '../features/login/userSlice';
// Importing necessary icons
import { FaHeart, FaEye } from "react-icons/fa"; // FaHeart for Favorites, FaEye for Recently viewed
import { FaUserCircle, FaBars } from "react-icons/fa"; // FaUserCircle for Login, FaBars for Menu (hamburger)
import { IoIosArrowDown } from "react-icons/io"; // For dropdown arrow

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, token } = useSelector((state: RootState) => state.user);
  const isAuthenticated = !!(token && user);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define styles
  const activeLinkStyle = "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"; // Blue underline for active
  const inactiveLinkStyle = "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1 transition-colors duration-200"; // Subtle hover underline

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section - Left */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center space-x-1 group">
            <span className="text-2xl font-bold text-green-800">BOOKER</span> {/* Changed to BOOKER in green */}
          </NavLink>
        </div>

        {/* Desktop Navigation & Auth Section - Always flex on md and larger screens */}
        <div className="hidden md:flex items-center space-x-6"> {/* This div ensures horizontal layout on desktop */}
          {/* Main Navigation Links */}
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm`}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/hotels"
            className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm`}
          >
            Hotels
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm`}
          >
            About
          </NavLink>
          {/* <NavLink
            to="/dashboard"
            className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm`}
          >
            Dasboard
          </NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm`}
          >
            Contact
          </NavLink>

          {/* Role-based Dashboard Links for Desktop */}
          {isAuthenticated && user?.role === 'admin' && (
            <NavLink
              to="/admin-dashboard"
              className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm`}
            >
              Admin Dashboard
            </NavLink>
          )}
          {isAuthenticated && user?.role === 'user' && (
            <NavLink
              to="/user-dashboard"
              className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm`}
            >
              User Dashboard
            </NavLink>
          )}
          
          {/* Auth Section - Pushed to the far right */}
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold px-3 py-1 rounded-full transition-all duration-300"
              >
                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-sm">
                  <span>
                    {user?.first_name?.charAt(0)?.toUpperCase()}
                  </span>
                </div>
                <span>{user?.first_name}</span>
                <IoIosArrowDown
                  className={`w-4 h-4 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">{user?.first_name} {user?.last_name}</p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    <Link
                      to="/my-bookings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-md">
              Log in / Sign Up
            </Link>
          )}
        </div>

        {/* Mobile Menu Button - Rightmost for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-6 space-y-2 bg-white shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} block px-4 py-3 rounded-lg font-medium transition-colors duration-200`}
            end
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/hotels"
            className={({ isActive }) => `${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} block px-4 py-3 rounded-lg font-medium transition-colors duration-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            Hotels
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} block px-4 py-3 rounded-lg font-medium transition-colors duration-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} block px-4 py-3 rounded-lg font-medium transition-colors duration-200`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          
          {/* Role-based Dashboard Links for Mobile */}
          {isAuthenticated && user?.role === 'admin' && (
            <NavLink
              to="/admin-dashboard"
              className={({ isActive }) => `${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} block px-4 py-3 rounded-lg font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              Admin Dashboard
            </NavLink>
          )}
          {isAuthenticated && user?.role === 'user' && (
            <NavLink
              to="/user-dashboard"
              className={({ isActive }) => `${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'} block px-4 py-3 rounded-lg font-medium transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              User Dashboard
            </NavLink>
          )}
          
          <div className="pt-2">
            {isAuthenticated ? (
              <div className="space-y-2">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">{user?.first_name} {user?.last_name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile Settings
                </Link>
                <Link
                  to="/my-bookings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Bookings
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/register"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in / Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
