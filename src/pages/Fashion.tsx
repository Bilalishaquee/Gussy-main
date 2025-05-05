import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import product1 from '../Assets/HOMEPAGE/1.png';
import product2 from '../Assets/HOMEPAGE/2.png';
import product3 from '../Assets/HOMEPAGE/3.png';
import product4 from '../Assets/HOMEPAGE/4.png';
import product5 from '../Assets/HOMEPAGE/5.png';
import product6 from '../Assets/HOMEPAGE/6.png';
import product7 from '../Assets/HOMEPAGE/7.png';
import product8 from '../Assets/HOMEPAGE/8.png';
import product9 from '../Assets/HOMEPAGE/9.png';
import product10 from '../Assets/HOMEPAGE/10.png';
import product11 from '../Assets/HOMEPAGE/11.png';
import product12 from '../Assets/HOMEPAGE/12.png';

// Data arrays
const shows = [
  { category: 'A', items: ['Access Hollywood Live', 'American Idol Fashion', 'American Woman', 'Award Shows'] },
  { category: 'B', items: ['Bachelor In Paradise', 'Below Deck'] },
  { category: 'C', items: ['Celebrity Apprentice', 'Cyrus vs Cyrus'] },
  { category: 'D', items: ['Daily / Nightly Pop', 'Dancing With The Stars'] },
  { category: 'E', items: ['E! News', 'Ellen', 'Emily In Paris', 'EXTRA'] },
  { category: 'F', items: ['Flip Or Flop', 'Fuller House'] },
  { category: 'G', items: ['GCB', "Girlfriends Guide To Divorce", 'GMA'] },
  { category: 'H', items: ['House Of Fab', 'How To Be A Trophy Wife'] }
];

const celebrities = [
  'Abbey Hunatman','Alexis Ballino','Abbey McCarthy','Alexis Rose',
  'Adela King','Abj Lawber','Adja Toure','Amanda Bonnie',
  'Ashcrest De Moura','Amanda Vaughn','Adrienne Lima','Amanda Smith',
  'Adrienne Molisch','Amber Neuchwee','Alaysia Barcowidaz','Ana Quinesses',
  'Alexis Echeverria','Andy Cohen','Angie Katsanevas','Anna Arnezoun',
  'Annabielle Neilson','Annaliese Puccini','Annalise Carbone','Anya Trethouse',
  'Anya Firestone','Aldana Biermann','Aldana Modik','Asa Soltan',
  'Ashley Borders','Ashley Darby','Ashley Hebert Rosenbaum','Ashley Larsonath',
  'Ashley Jacobs','Adela Davis','Alderry O\'Dray','Audrina Rattidge'
];

const brands = ['All Brands', 'Gucci', 'Prada', 'Versace', 'Dolce & Gabbana'];
const productsList = ['All Products', 'Dresses', 'Accessories', 'Tops', 'Bottoms'];

const products = [
  { image: product1, name: "Gina Richardson's Black Floral Long Sleeve Midi Dress", source: "Real Housewives of Orange County" },
  { image: product2, name: "Lena Borgeous's Tan And White Printed Boho Dress", source: "Southern Charm Instagram Fashion" },
  { image: product3, name: "Brynn Whitfield's White Satin Lace Slip Dress", source: "Real Housewives of New York Instagram" },
  { image: product4, name: "Melissa Gorga's Yellow Rose Tweed Mini Dress", source: "Real Housewives of New Jersey Instagram" },
  { image: product5, name: "Lexi Wood's Cropped Blazer And Skirt", source: "Summer House Fashion" },
  { image: product6, name: "Gabby Prescod's Black Aviator Sunglasses", source: "Summer House Fashion" },
  { image: product7, name: "Madison LeCroy's Yellow Off The Shoulder Dress", source: "Watch What Happens Live Fashion" },
  { image: product8, name: "Lexi Wood's Yellow Satin Backless Dress", source: "Summer House Fashion" },
  { image: product9, name: "Amanda Batula's Black Belted Pantsuit", source: "Summer House Fashion" },
  { image: product10, name: "Leva Bonaparte's White Cable Knit Varsity Sweater", source: "Southern Charm Instagram Fashion" },
  { image: product11, name: "Angela Oakley's Black Draped Midi Dress", source: "Real Housewives of Atlanta Fashion" },
  { image: product12, name: "Paige DeSorbo's Black Satin Peplum Top", source: "Summer House Fashion" }
];

const Fashion: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<'shows'|'celebs'|'brands'|'products'|null>(null);
  const [selected, setSelected] = useState({ 
    show: 'All Shows', 
    celebrity: 'All Celebrities', 
    brand: brands[0], 
    product: productsList[0],
    topPicks: false,
    latestDrops: false
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as any)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" ref={ref}>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white px-4">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Trending This Week</h1>
          <p className="text-base md:text-lg mb-6">Discover the latest styles from your favorite shows and celebrities.</p>
          <button className="bg-[#D4AF37] text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-[#B38F2D] transition-all">
            Explore Now
          </button>
        </div>
      </div>

      {/* Shop Section */}
      <div className="bg-white py-8 md:py-12 text-black">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <h2 className="text-xl md:text-2xl font-serif">Shop With Filters</h2>
              
              <div className="relative w-full md:w-auto">
                <input 
                  type="search" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 border rounded-full w-full md:w-64" 
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {/* Mobile Filters Button */}
            <button 
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden border rounded px-4 py-2 w-full mb-4 flex justify-between items-center"
            >
              Filters
              <svg className="ml-2" width="12" height="8" viewBox="0 0 12 8">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Checkbox Sidebar and Filters */}
            <div className="flex flex-col md:flex-row">
              {/* Mobile Filters Panel */}
              <div className={`md:hidden ${mobileFiltersOpen ? 'block' : 'hidden'} mb-6`}>
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="mobileTopPicks" 
                      checked={selected.topPicks} 
                      onChange={() => setSelected(s => ({...s, topPicks: !s.topPicks}))}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="mobileTopPicks">Top Picks</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="mobileLatestDrops" 
                      checked={selected.latestDrops} 
                      onChange={() => setSelected(s => ({...s, latestDrops: !s.latestDrops}))}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="mobileLatestDrops">Latest Drops</label>
                  </div>
                </div>
              </div>

              {/* Desktop Checkbox Sidebar */}
              <div className="hidden md:block w-1/5 pr-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="topPicks" 
                      checked={selected.topPicks} 
                      onChange={() => setSelected(s => ({...s, topPicks: !s.topPicks}))}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="topPicks">Top Picks</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="latestDrops" 
                      checked={selected.latestDrops} 
                      onChange={() => setSelected(s => ({...s, latestDrops: !s.latestDrops}))}
                      className="mr-2 h-4 w-4"
                    />
                    <label htmlFor="latestDrops">Latest Drops</label>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/5">
                <div className="grid grid-cols-2 md:flex gap-2 md:gap-4 mb-6 flex-wrap">
                  {/* Shows Mega Dropdown */}
                  <div className="relative w-full md:w-auto">
                    <button 
                      onClick={() => setOpenMenu(openMenu==='shows'?null:'shows')} 
                      className="border rounded px-4 py-2 w-full md:min-w-[200px] flex justify-between items-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="truncate">{selected.show}</span>
                      <svg className="ml-2" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                  </div>

                  {/* Celebrities Mega Dropdown */}
                  <div className="relative w-full md:w-auto">
                    <button 
                      onClick={() => setOpenMenu(openMenu==='celebs'?null:'celebs')} 
                      className="border rounded px-4 py-2 w-full md:min-w-[200px] flex justify-between items-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="truncate">{selected.celebrity}</span>
                      <svg className="ml-2" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                  </div>

                  {/* Brand Dropdown */}
                  <div className="relative w-full md:w-auto">
                    <button 
                      onClick={() => setOpenMenu(openMenu==='brands'?null:'brands')} 
                      className="border rounded px-4 py-2 w-full md:min-w-[200px] flex justify-between items-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="truncate">{selected.brand}</span>
                      <svg className="ml-2" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                  </div>

                  {/* Product Dropdown */}
                  <div className="relative w-full md:w-auto">
                    <button 
                      onClick={() => setOpenMenu(openMenu==='products'?null:'products')} 
                      className="border rounded px-4 py-2 w-full md:min-w-[200px] flex justify-between items-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="truncate">{selected.product}</span>
                      <svg className="ml-2" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </button>
                  </div>
                </div>

                {/* Dropdown Content - Positioned within content area */}
                {openMenu === 'shows' && (
                  <div className="w-full bg-[#56827F] p-4 md:p-6 rounded-lg shadow-lg text-white mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-4">
                      <h3 className="text-xl md:text-2xl font-semibold">Shows</h3>
                      <div className="relative w-full md:w-1/3">
                        <input 
                          type="search" 
                          placeholder="Search shows..." 
                          className="pl-10 pr-4 py-2 md:py-3 rounded-full text-black w-full" 
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-h-[400px] overflow-y-auto pr-2 md:pr-4">
                      {shows.map(g => (
                        <div key={g.category}>
                          <h4 className="text-lg md:text-xl font-medium mb-2 md:mb-4">{g.category}</h4>
                          <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                            {g.items.map(i => (
                              <li 
                                key={i} 
                                onClick={() => { setSelected(s=>({...s, show: i})); setOpenMenu(null); }} 
                                className="cursor-pointer hover:underline hover:text-[#D4AF37] transition-colors"
                              >
                                {i}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {openMenu === 'celebs' && (
                  <div className="w-full bg-[#56827F] p-4 md:p-6 rounded-lg shadow-lg text-white mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-4">
                      <h3 className="text-xl md:text-2xl font-semibold">Celebrities</h3>
                      <div className="relative w-full md:w-1/3">
                        <input 
                          type="search" 
                          placeholder="Search celebrities..." 
                          className="pl-10 pr-4 py-2 md:py-3 rounded-full text-black w-full" 
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-h-[400px] overflow-y-auto pr-2 md:pr-4">
                      {celebrities.map(n => (
                        <div
                          key={n} 
                          onClick={() => { setSelected(s=>({...s, celebrity: n})); setOpenMenu(null); }} 
                          className="cursor-pointer hover:underline hover:text-[#D4AF37] transition-colors text-sm md:text-base"
                        >
                          {n}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {openMenu === 'brands' && (
                  <div className="w-full bg-[#56827F] p-4 md:p-6 rounded-lg shadow-lg text-white mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-4">
                      <h3 className="text-xl md:text-2xl font-semibold">Brands</h3>
                      <div className="relative w-full md:w-1/2">
                        <input 
                          type="search" 
                          placeholder="Search brands..." 
                          className="pl-10 pr-4 py-2 md:py-3 rounded-full text-black w-full" 
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                      </div>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto pr-2 md:pr-4">
                      <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
                        {brands.map(b => (
                          <li 
                            key={b} 
                            onClick={() => { setSelected(s=>({...s, brand: b})); setOpenMenu(null); }} 
                            className="cursor-pointer hover:underline hover:text-[#D4AF37] transition-colors"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {openMenu === 'products' && (
                  <div className="w-full bg-[#56827F] p-4 md:p-6 rounded-lg shadow-lg text-white mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-4">
                      <h3 className="text-xl md:text-2xl font-semibold">Products</h3>
                      <div className="relative w-full md:w-1/2">
                        <input 
                          type="search" 
                          placeholder="Search products..." 
                          className="pl-10 pr-4 py-2 md:py-3 rounded-full text-black w-full" 
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                      </div>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto pr-2 md:pr-4">
                      <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
                        {productsList.map(p => (
                          <li 
                            key={p} 
                            onClick={() => { setSelected(s=>({...s, product: p})); setOpenMenu(null); }} 
                            className="cursor-pointer hover:underline hover:text-[#D4AF37] transition-colors"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:block w-1/5 pr-8">
              {/* Empty space to align with sidebar */}
            </div>
            <div className="w-full md:w-4/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {products.map((p,i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-square overflow-hidden rounded-lg mb-2 md:mb-3">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
                    </div>
                    <h3 className="text-xs md:text-sm font-medium line-clamp-2">{p.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{p.source}</p>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-8 md:mt-12 gap-1 md:gap-2">
                {[1,2,3,4,5,6].map(page => (
                  <button 
                    key={page} 
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${page===1?'bg-black text-white':'text-gray-500 hover:bg-gray-100'}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;