import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status on mount & route change
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  // Dynamic nav items based on login state
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/top-colleges', name: 'Top Colleges' },
    { path: '/top-academics', name: 'Top Academics' },
    { path: '/top-placements', name: 'Top Placements' },
    isLoggedIn
      ? { path: '/admin/manage-college', name: 'Dashboard' }
      : { path: '/contact', name: 'Contact' },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">CollegeExplorer</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isDashboard = item.name === 'Dashboard';

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? isDashboard
                          ? 'text-purple-700 font-bold'
                          : 'text-green-600'
                        : isDashboard
                          ? 'text-purple-600 hover:text-purple-800 font-semibold'
                          : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className={`absolute left-0 bottom-0 h-0.5 w-full ${
                          isDashboard ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-green-500'
                        }`}
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-sm transition-all"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/admin/login"
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-sm transition-all"
                >
                  Admin
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isDashboard = item.name === 'Dashboard';

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? isDashboard
                      ? 'bg-purple-50 text-purple-700 font-bold'
                      : 'bg-green-50 text-green-600'
                    : isDashboard
                      ? 'text-purple-600 hover:text-purple-800 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full px-3 py-2 rounded-md text-base font-medium text-center text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-sm"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/admin/login"
              className="block w-full px-3 py-2 rounded-md text-base font-medium text-center text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin
            </Link>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
