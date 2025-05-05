import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-90 text-white py-4">
      <div className="relative container mx-auto px-4 flex justify-between items-center">
        {/* Left: Mobile menu button */}
        <button 
          className="md:hidden z-10" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/src/Assets/gussy.png" 
              alt="Logo" 
              style={{ height: '90px' }} 
              className="w-auto"
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/shows" className="hover:text-gray-300 transition-colors">Shows</Link>
          <Link to="/celebrity" className="hover:text-gray-300 transition-colors">Celebrities</Link>
          <Link to="/fashion" className="hover:text-gray-300 transition-colors">Shop All</Link>
        </nav>

        {/* Right: Search bar (desktop) */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border border-gray-700 rounded-full py-1 px-4 pl-10 w-64 focus:outline-none focus:border-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        {/* Right: Search icon (mobile) */}
        <div className="md:hidden z-10">
          <Search className="w-5 h-5" />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-black bg-opacity-95 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/shows" className="text-lg">Shows</Link>
            <Link to="/celebrity" className="text-lg">Celebrities</Link>
            <Link to="/fashion" className="text-lg">Shop All</Link>
          </nav>
          <div className="mt-4 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border border-gray-700 rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:border-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
