import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import mainLogo from '/src/Assets/gussy.png';
import secondaryLogo from '/src/Assets/logo.png';
import bgImage from '/src/Assets/bg.png';

interface HeaderProps {
  variant?: 'light' | 'dark' | 'darkThreePart';
  hideLogo?: boolean;
  useSecondaryLogo?: boolean;
}

const Header: React.FC<HeaderProps> = React.memo(({ 
  variant = 'dark', 
  hideLogo = false,
  useSecondaryLogo = false 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Memoize all computed styles
  const { textColor, bgColor, borderColor, searchIconColor, hoverColor } = useMemo(() => ({
    textColor: variant === 'light' ? 'text-black' : 'text-white',
    bgColor: isHomePage 
      ? '' // Empty for home page as we'll use background image
      : variant === 'light' 
        ? 'bg-white' 
        : variant === 'darkThreePart'
          ? 'bg-gradient-to-r from-[#0e0d0e] via-[#191919] to-[#201f1e]'
          : 'bg-black',
    borderColor: variant === 'light' ? 'border-gray-200' : 'border-gray-700',
    searchIconColor: variant === 'light' ? 'text-gray-500' : 'text-gray-400',
    hoverColor: variant === 'light' ? 'hover:text-gray-600' : 'hover:text-gray-300'
  }), [variant, isHomePage]);

  // Memoize logo properties
  const logoProps = useMemo(() => ({
    src: useSecondaryLogo ? secondaryLogo : mainLogo,
    height: useSecondaryLogo ? '50px' : '70px'
  }), [useSecondaryLogo]);

  // Optimized click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Mobile always has black background
  const mobileBgColor = 'bg-black';

  return (
    <header 
      className={`sticky top-0 z-50 ${bgColor} ${textColor} py-4 ${variant === 'light' ? 'border-b' : ''} ${isHomePage ? 'bg-black md:bg-cover md:bg-center-top md:bg-no-repeat md:bg-[url(/src/Assets/bg.png)]' : ''}`}
    >
      <div className="relative container mx-auto px-4 flex justify-between items-center">
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-10" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 ${textColor.replace('text-', 'bg-')}`}></span>
            <span className={`block w-6 h-0.5 ${textColor.replace('text-', 'bg-')}`}></span>
            <span className={`block w-6 h-0.5 ${textColor.replace('text-', 'bg-')}`}></span>
          </div>
        </button>

        {/* Logo */}
        {!hideLogo && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logoProps.src}
                alt="Logo" 
                style={{ height: logoProps.height }} 
                className="w-auto"
                loading="eager"
              />
            </Link>
          </div>
        )}

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8" style={{ fontFamily: "'Afacad', serif" }}>
          <MemoizedNavLink to="/ShowsFindr" className={hoverColor}>Shows</MemoizedNavLink>
          <MemoizedNavLink to="/celeb" className={hoverColor}>Celebrities</MemoizedNavLink>
          <MemoizedNavLink to="/fashion" className={hoverColor}>Shop All</MemoizedNavLink>
          <MemoizedNavLink to="/about" className={hoverColor}>About US</MemoizedNavLink>
        </nav>

        {/* Search bar */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className={`bg-transparent border ${borderColor} rounded-full py-1 px-4 pl-10 w-64 focus:outline-none ${textColor}`}
          />
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${searchIconColor}`} />
        </div>
      </div>

      {/* Mobile menu - always black background */}
      {isMenuOpen && (
        <MobileMenu 
          ref={menuRef} 
          bgColor={mobileBgColor}
          textColor={textColor} 
          borderColor={borderColor}
          searchIconColor={searchIconColor}
          hoverColor={hoverColor}
        />
      )}
    </header>
  );
});

// Mobile menu component
const MobileMenu = React.forwardRef<HTMLDivElement, {
  bgColor: string;
  textColor: string;
  borderColor: string;
  searchIconColor: string;
  hoverColor: string;
}>((props, ref) => (
  <div 
    ref={ref} 
    className={`md:hidden ${props.bgColor} py-4 px-6 ${props.textColor}`}
  >
    <nav className="flex flex-col space-y-4">
      <MemoizedNavLink to="/ShowsFindr" className={props.hoverColor}>Shows</MemoizedNavLink>
      <MemoizedNavLink to="/celeb" className={props.hoverColor}>Celebrities</MemoizedNavLink>
      <MemoizedNavLink to="/fashion" className={props.hoverColor}>Shop All</MemoizedNavLink>
      <MemoizedNavLink to="/about" className={props.hoverColor}>About US</MemoizedNavLink>
    </nav>
    <div className="mt-4 relative">
      <input 
        type="text" 
        placeholder="Search..." 
        className={`bg-transparent border ${props.borderColor} rounded-full py-2 px-4 pl-10 w-full focus:outline-none ${props.textColor}`}
      />
      <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${props.searchIconColor}`} />
    </div>
  </div>
));

// Optimized NavLink component
const MemoizedNavLink = React.memo(({ to, className, children }: {
  to: string;
  className: string;
  children: React.ReactNode;
}) => (
  <Link to={to} className={`${className} transition-colors`}>
    {children}
  </Link>
));

export default Header;