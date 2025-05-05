import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif mb-4">Gussy</h3>
            <div className="flex justify-center space-x-4 mb-6">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Browse */}
            <div>
              <h4 className="text-sm font-medium mb-4">Browse</h4>
              <ul className="space-y-2">
                <li><Link to="/fashion" className="text-sm text-gray-400 hover:text-white transition-colors">Latest Outfits</Link></li>
                <li><Link to="/fashion" className="text-sm text-gray-400 hover:text-white transition-colors">Trending</Link></li>
                <li><Link to="/shows" className="text-sm text-gray-400 hover:text-white transition-colors">Shows</Link></li>
                <li><Link to="/celebrity" className="text-sm text-gray-400 hover:text-white transition-colors">Celebrities</Link></li>
              </ul>
            </div>

            {/* Shows */}
            <div>
              <h4 className="text-sm font-medium mb-4">Shows</h4>
              <ul className="space-y-2">
                {['The Bachelor', 'Selling Sunset', 'Emily in Paris', 'Bridgerton', 'The Kardashians'].map((show) => (
                  <li key={show}>
                    <Link to="/shows" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {show}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-sm font-medium mb-4">Info</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/get-in-touch" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-sm font-medium mb-4">Never Miss a Style Alert</h4>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border border-gray-700 rounded px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-8 items-start mb-12">
            <div className="col-span-1">
              <h3 className="text-3xl font-serif">Gussy</h3>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-4 gap-8">
                {/* Browse */}
                <div>
                  <h4 className="text-sm font-medium mb-4">Browse</h4>
                  <ul className="space-y-2">
                    <li><Link to="/fashion" className="text-sm text-gray-400 hover:text-white transition-colors">Latest Outfits</Link></li>
                    <li><Link to="/fashion" className="text-sm text-gray-400 hover:text-white transition-colors">Trending</Link></li>
                    <li><Link to="/shows" className="text-sm text-gray-400 hover:text-white transition-colors">Shows</Link></li>
                    <li><Link to="/celebrity" className="text-sm text-gray-400 hover:text-white transition-colors">Celebrities</Link></li>
                  </ul>
                </div>

                {/* Shows */}
                <div>
                  <h4 className="text-sm font-medium mb-4">Shows</h4>
                  <ul className="space-y-2">
                    {['The Bachelor', 'Selling Sunset', 'Emily in Paris', 'Bridgerton', 'The Kardashians'].map((show) => (
                      <li key={show}>
                        <Link to="/shows" className="text-sm text-gray-400 hover:text-white transition-colors">
                          {show}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Info */}
                <div>
                  <h4 className="text-sm font-medium mb-4">Info</h4>
                  <ul className="space-y-2">
                    <li><Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                    <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                    <li><Link to="/get-in-touch" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                    <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</Link></li>
                  </ul>
                </div>

                {/* Newsletter + Social */}
                <div>
                  <h4 className="text-sm font-medium mb-4">Never Miss a Style Alert</h4>
                  <form className="flex flex-col gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="bg-transparent border border-gray-700 rounded px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                    />
                    <button
                      type="submit"
                      className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex space-x-4">
                      {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                        <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                          <Icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Gussy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
