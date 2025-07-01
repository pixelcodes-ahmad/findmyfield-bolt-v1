import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
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
    { name: 'Browse Fields', href: '#fields' },
    { name: 'List Your Field', href: '#list' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#11C2A7]">FindMyField</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#2C2C2C] hover:text-[#11C2A7] transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Auth & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#2C2C2C] hover:text-[#11C2A7] transition-colors duration-200 font-medium">
              Login
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-[#2C2C2C] hover:text-[#11C2A7] transition-colors duration-200 font-medium">
              Sign Up
            </button>
            <button className="bg-[#11C2A7] text-white px-6 py-2 rounded-lg hover:bg-[#0EA58D] transition-colors duration-200 font-medium">
              Book a Field
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#2C2C2C]" />
            ) : (
              <Menu className="h-6 w-6 text-[#2C2C2C]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#2C2C2C] hover:text-[#11C2A7] transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="text-[#2C2C2C] hover:text-[#11C2A7] transition-colors duration-200 font-medium text-left">
                  Login
                </button>
                <button className="text-[#2C2C2C] hover:text-[#11C2A7] transition-colors duration-200 font-medium text-left">
                  Sign Up
                </button>
                <button className="bg-[#11C2A7] text-white px-6 py-2 rounded-lg hover:bg-[#0EA58D] transition-colors duration-200 font-medium w-full">
                  Book a Field
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;