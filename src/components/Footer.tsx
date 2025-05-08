import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import mainLogo from '/src/Assets/gussy.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="md:hidden">
  <div className="text-center mb-8">
  {/* Logo Image */}
  <img
    src={mainLogo}
    alt="Gussy"
    className="mx-auto mb-0 w-36 h-auto" // adjust width as needed
  />

    {/* Social Icons */}
    <div className="flex justify-center space-x-3">
      {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
        <a
          key={index}
          href="#"
          className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  </div>
</div>


          <div className="space-y-8">
            {/* Browse */}
            <div className="md:hidden space-y-8 text-left">
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
</div>


            {/* Newsletter */}
         
            <div className="md:hidden border-t border-gray-800 pt-6">
  <h4 className="text-white text-base font-semibold mb-4">Never Miss a Style Alert</h4>
  <form className="flex overflow-hidden rounded-full border border-white">
    <input
      type="email"
      placeholder="Your email address"
      className="flex-1 px-4 py-2 bg-black text-white placeholder-white text-sm focus:outline-none"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
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
              {/* <h3 className="text-3xl font-serif">Gussy</h3> */}
               <img
    src={mainLogo}
    alt="Gussy"
    className="mx-auto mb-1 w-36 h-auto" // adjust width as needed
  />
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

              <div className="mt-8 pt-6 border-t border-gray-800 space-y-6">
              <div className="space-y-6">
  {/* Follow Us */}
  <div>
    <div className="-ml-20 -mt-3"> {/* moved slightly left and up */}
  <h4 className="text-sm font-medium mb-1">Follow Us</h4>
  <div className="flex space-x-2">
    {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
      <a
        key={index}
        href="#"
        className="w-4 h-4 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
      >
        <Icon size={12} />
      </a>
    ))}
  </div>
</div>

  </div>
  </div>

  {/* Newsletter */}
  <div className="-ml-20"> {/* shift slightly left */}
  <h3 className="text-sm font-medium mb-3">Never Miss a Style Alert</h3>
  <form className="flex overflow-hidden rounded-full border border-white max-w-xs">
    <input
      type="email"
      placeholder="Your email address"
      className="flex-grow px-3 py-1.5 bg-black text-white placeholder-white text-sm focus:outline-none"
    />
    <button
      type="submit"
      className="px-3 py-1 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
    >
      Subscribe
    </button>
  </form>
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
