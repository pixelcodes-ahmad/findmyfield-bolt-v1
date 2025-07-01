import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const OriginalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Pages', href: '#pages' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-[#11C2A7] mr-2" />
            <h1 className="text-2xl font-bold text-[#11C2A7]">FindMyField</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#2C2C2C] dark:text-gray-300 hover:text-[#11C2A7] dark:hover:text-[#11C2A7] transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>🇰🇪 Eng</span>
            </div>
            <button className="bg-[#11C2A7] text-white px-6 py-2 rounded-lg hover:bg-[#0EA58D] transition-colors duration-200 font-medium">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#2C2C2C] dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-[#2C2C2C] dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#2C2C2C] dark:text-gray-300 hover:text-[#11C2A7] dark:hover:text-[#11C2A7] transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">🇰🇪 Eng</span>
                  <ThemeToggle />
                </div>
                <button className="bg-[#11C2A7] text-white px-6 py-2 rounded-lg hover:bg-[#0EA58D] transition-colors duration-200 font-medium w-full">
                  Register
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default OriginalHeader;