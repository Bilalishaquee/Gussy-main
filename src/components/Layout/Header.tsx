import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 flex items-center justify-between border-b border-gray-100">
      <nav className="flex items-center space-x-6">
        <Link to="/shows" className="text-sm text-gray-600 hover:text-black">Shows</Link>
        <Link to="/celebrities" className="text-sm text-gray-600 hover:text-black">Celebrities</Link>
        <Link to="/shop" className="text-sm text-gray-600 hover:text-black">Shop All</Link>
      </nav>
      
      <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl font-serif italic">Gussy</h1>
      </Link>
      
      <div className="relative">
        <input
          type="text"
          className="py-1 px-3 pr-8 rounded-full border border-gray-300 text-sm w-36 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Search"
        />
        <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
    </header>
  );
};

export default Header;