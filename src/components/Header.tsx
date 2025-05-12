import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import mainLogo from '/src/Assets/gussy.png';
import secondaryLogo from '/src/Assets/logo.png';

// Preload logos (removed unused variable)

interface HeaderProps {
  variant?: 'light' | 'dark';
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

  // Memoize all computed styles
  const { textColor, bgColor, borderColor, searchIconColor, hoverColor } = useMemo(() => ({
    textColor: variant === 'light' ? 'text-black' : 'text-white',
    bgColor: variant === 'light' ? 'bg-white' : 'bg-black ',
    borderColor: variant === 'light' ? 'border-gray-200' : 'border-gray-700',
    searchIconColor: variant === 'light' ? 'text-gray-500' : 'text-gray-400',
    hoverColor: variant === 'light' ? 'hover:text-gray-600' : 'hover:text-gray-300'
  }), [variant]);

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

  return (
    <header className={`sticky top-0 z-50 ${bgColor} ${textColor} py-4 ${variant === 'light' ? 'border-b' : ''}`}>
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
                loading="eager" // Force eager loading
              />
            </Link>
          </div>
        )}

        {/* Desktop navigation - using React.memo for links */}
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <MobileMenu 
          ref={menuRef} 
          bgColor={bgColor} 
          textColor={textColor} 
          borderColor={borderColor}
          searchIconColor={searchIconColor}
          hoverColor={hoverColor}
        />
      )}
    </header>
  );
});

// Optimized mobile menu component
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