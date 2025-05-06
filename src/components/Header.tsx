import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import mainLogo from '/src/Assets/gussy.png'; // Main logo
import secondaryLogo from '../Assets/logo.png'; // Logo for celebrity/shows/product pages

interface HeaderProps {
  variant?: 'light' | 'dark';
  hideLogo?: boolean;
  useSecondaryLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  variant = 'dark', 
  hideLogo = false,
  useSecondaryLogo = false 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Determine colors based on variant
  const textColor = variant === 'light' ? 'text-black' : 'text-white';
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-[#000000] bg-opacity-90';
  const borderColor = variant === 'light' ? 'border-gray-200' : 'border-gray-700';
  const searchIconColor = variant === 'light' ? 'text-gray-500' : 'text-gray-400';
  const hoverColor = variant === 'light' ? 'hover:text-gray-600' : 'hover:text-gray-300';

  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Determine which logo to use
  const logo = useSecondaryLogo ? secondaryLogo : mainLogo;
  const logoHeight = useSecondaryLogo ? '50px' : '70px';

  return (
    <header className={`sticky top-0 z-50 ${bgColor} ${textColor} py-4 ${variant === 'light' ? 'border-b' : ''}`}>
      <div className="relative container mx-auto px-4 flex justify-between items-center">
        {/* Left: Mobile menu button */}
        <button 
          className="md:hidden z-10" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 ${variant === 'light' ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 ${variant === 'light' ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 ${variant === 'light' ? 'bg-black' : 'bg-white'}`}></span>
          </div>
        </button>

        {/* Center: Logo (conditionally rendered) */}
        {!hideLogo && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logo}
                alt="Logo" 
                style={{ height: logoHeight }} 
                className="w-auto"
              />
            </Link>
          </div>
        )}

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8"style={{marginLeft:'-100px'}}>
          <Link to="/shows" className={`${hoverColor} transition-colors`}>Shows</Link>
          <Link to="/celebrity" className={`${hoverColor} transition-colors`}>Celebrities</Link>
          <Link to="/fashion" className={`${hoverColor} transition-colors`}>Shop All</Link>
          {/* <Link to="/about" className={`${hoverColor} transition-colors`}>About US</Link>
          <Link to="/get-in-touch" className={`${hoverColor} transition-colors`}>Contact US</Link>
          <Link to="/terms" className={`${hoverColor} transition-colors`}>Terms</Link>
          <Link to="/product" className={`${hoverColor} transition-colors`}>Products</Link> */}
        </nav>

        {/* Right: Search bar (desktop) */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className={`bg-transparent border ${borderColor} rounded-full py-1 px-4 pl-10 w-64 focus:outline-none ${
              variant === 'light' ? 'focus:border-black text-black' : 'focus:border-white text-white'
            }`}
          />
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${searchIconColor}`} />
        </div>

        {/* Right: Search icon (mobile) */}
        <div className="md:hidden z-10">
          <Search className={`w-5 h-5 ${variant === 'light' ? 'text-black' : 'text-white'}`} />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div 
          ref={menuRef} 
          className={`md:hidden ${bgColor} py-4 px-6 ${variant === 'light' ? 'border-t border-gray-200' : ''}`}
        >
          <nav className="flex flex-col space-y-4">
            <Link to="/shows" className={`${hoverColor} transition-colors`}>Shows</Link>
            <Link to="/celebrity" className={`${hoverColor} transition-colors`}>Celebrities</Link>
            <Link to="/fashion" className={`${hoverColor} transition-colors`}>Shop All</Link>
            {/* <Link to="/about" className={`${hoverColor} transition-colors`}>About US</Link>
            <Link to="/get-in-touch" className={`${hoverColor} transition-colors`}>Contact US</Link>
            <Link to="/terms" className={`${hoverColor} transition-colors`}>Terms</Link>
            <Link to="/product" className={`${hoverColor} transition-colors`}>Products</Link> */}
          </nav>
          <div className="mt-4 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className={`bg-transparent border ${borderColor} rounded-full py-2 px-4 pl-10 w-full focus:outline-none ${
                variant === 'light' ? 'focus:border-black text-black' : 'focus:border-white text-white'
              }`}
            />
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${searchIconColor}`} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;