import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import product1 from '../Assets/featured/1.png';
import product2 from '../Assets/featured/2.png';
import product3 from '../Assets/featured/9.png';
import product4 from '../Assets/featured/4.png';
import product5 from '../Assets/featured/5.png';
import product6 from '../Assets/featured/6.png';
import product7 from '../Assets/featured/7.png';
import product8 from '../Assets/featured/8.png';
// Types
interface Show {
  id: string;
  title: string;
  network: string;
  networkType: 'Netflix' | 'HBO' | 'Apple';
  image: string;
  featuredImage?: string; // Separate image for featured section
  listingImage?: string;  // Separate image for listing section
}

// Show Data - Updated with separate images for featured and listing
const featuredShows: Show[] = [
  {
    id: '1',
    title: 'Emily In Paris',
    network: 'Netflix',
    networkType: 'Netflix',
    featuredImage: product1,
    listingImage: product1,
  },
  {
    id: '2',
    title: 'The White Lotus',
    network: 'HBO',
    networkType: 'HBO',
    featuredImage: product2,
    listingImage: product2,
  },
  {
    id: '3',
    title: 'Succession',
    network: 'HBO',
    networkType: 'HBO',
    featuredImage: product3,
    listingImage: product3,
  },
  {
    id: '4',
    title: 'Bridgerton',
    network: 'Netflix',
    networkType: 'Netflix',
    featuredImage: product4,
    listingImage: product4,
  },
  {
    id: '5',
    title: 'Ted Lasso',
    network: 'Apple TV+',
    networkType: 'Apple',
    featuredImage: product5,
    listingImage: product5,
  },
  {
    id: '6',
    title: 'Stranger Things',
    network: 'Netflix',
    networkType: 'Netflix',
    featuredImage: product6,
    listingImage: product6,
  },
  {
    id: '7',
    title: 'And Just Like That',
    network: 'HBO',
    networkType: 'HBO',
    featuredImage: product7,
    listingImage: product7,
  },
  {
    id: '8',
    title: 'Euphoria',
    network: 'HBO',
    networkType: 'HBO',
    featuredImage: product8,
    listingImage: product8,
  },
  
];

// Network filters
const networks = [
  { id: 'all', label: 'All' },
  { id: 'netflix', label: 'Netflix' },
  { id: 'hbo', label: 'HBO' },
  { id: 'amazon', label: 'Amazon Prime' },
  { id: 'hulu', label: 'Hulu' },
  { id: 'disney', label: 'Disney+' },
  { id: 'max', label: 'Max' },
  { id: 'starz', label: 'Starz' },
  { id: 'apple', label: 'Apple TV+' },
  { id: 'paramount', label: 'Paramount+' },
  { id: 'peacock', label: 'Peacock' },
  { id: 'prime', label: 'Prime Video' },
  { id: 'roku', label: 'Roku' }
];

// Show Card Component for Featured Shows (Desktop)
const FeaturedShowCard: React.FC<{ show: Show }> = ({ show }) => {
     const navigate = useNavigate();
  const getBadgeStyle = () => {
    switch (show.networkType) {
      case 'Netflix': return 'bg-red-600';
      case 'HBO': return 'bg-blue-900';
      case 'Apple': return 'bg-gray-800';
      default: return 'bg-gray-700';
    }
  };

  return (
    <div className="relative flex-shrink-0 w-[300px] mx-4 overflow-hidden transition-transform duration-300 transform hover:scale-[1.02] group">
         <div 
        className="relative h-[450px] w-full overflow-hidden rounded-xl shadow-xl cursor-pointer"
        onClick={() => navigate('/shows')}
      >
        <img 
          src={show.featuredImage} 
          alt={show.title} 
          className="object-cover w-full h-full transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold tracking-tight">
          {show.title}
        </h3>
        <div className="flex items-center mt-3 space-x-3">
          <span className={`px-3 py-1.5 text-sm font-medium rounded ${getBadgeStyle()}`}>
            {show.network}
          </span>
          <span className="text-sm text-gray-300">Series</span>
        </div>
      </div>
    </div>
  );
};

// Show Card Component for Listing (Desktop & Mobile)
const ListingShowCard: React.FC<{ show: Show }> = ({ show }) => {
  return (
    <div className="w-full transition-transform duration-300 hover:scale-105">
      <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-lg">
        <img
          src={show.listingImage}
          alt={show.title}
          className="w-full h-[350px] object-cover rounded-t-xl"
        />
        <div className="px-4 py-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-brygada font-bold">{show.title}</h3>
            <p className="text-sm italic text-gray-500 whitespace-nowrap ml-4">
              {show.network} Series
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Featured Shows Component (Desktop)
const FeaturedShows: React.FC<{ shows: Show[] }> = ({ shows }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'right' ? 300 : -300;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container px-8 mx-auto">
        <h1 className="mb-10 text-4xl font-bold text-center font-brygada">Featured Shows</h1>

        <div className="relative">
          {/* Left Arrow - Only show if not at start */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute z-10 w-12 h-12 bg-white border-2 border-gray-200 text-gray-800 rounded-full flex items-center justify-center -left-6 top-1/2 transform -translate-y-1/2 hover:bg-gray-100 shadow-lg transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide py-4 pl-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex space-x-6">
              {shows.map((show) => (
                <FeaturedShowCard key={show.id} show={show} />
              ))}
            </div>
          </div>

          {/* Right Arrow - Only show if not at end */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute z-10 w-12 h-12 bg-white border-2 border-gray-200 text-gray-800 rounded-full flex items-center justify-center -right-6 top-1/2 transform -translate-y-1/2 hover:bg-gray-100 shadow-lg transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Shows Listing Component (Desktop)
const ShowsListing: React.FC<{ shows: Show[] }> = ({ shows }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 8;

  const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredShows = shows.filter((show) => {
    const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNetwork =
      selectedNetwork === 'all' || show.network.toLowerCase().includes(selectedNetwork.toLowerCase());
    return matchesSearch && matchesNetwork;
  });

  const totalPages = Math.ceil(filteredShows.length / showsPerPage);
  const currentShows = filteredShows.slice(
    (currentPage - 1) * showsPerPage,
    currentPage * showsPerPage
  );

  return (
    <div className="container px-4 py-10 mx-auto">
      {/* Heading */}
      <h1 className="mb-6 sm:mb-8 text-3xl font-bold text-center font-brygada">Find Shows</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="flex w-full max-w-3xl overflow-hidden border rounded-full">
          <input
            type="text"
            placeholder="Search For Shows..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 text-sm text-gray-800 bg-white focus:outline-none rounded-l-full"
          />
          <button className="px-6 bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-white font-medium rounded-r-full">
            Search
          </button>
        </div>
      </div>

      {/* Network Filters */}
      <div className="flex flex-wrap justify-center gap-12 mb-10">
        {networks.map((network) => (
          <button
            key={network.id}
            onClick={() => setSelectedNetwork(network.id)}
            className={`px-5 py-1.5 text-sm border rounded-full transition 
              ${
                selectedNetwork === network.id
                  ? 'bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-white border-transparent'
                  : 'bg-white text-black border-black hover:bg-gray-100'
              }`}
          >
            {network.label}
          </button>
        ))}
      </div>

      {/* Alphabet Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {alphabet.map((letter, index) => (
          <button
            key={index}
            className={`w-9 h-9 text-sm font-semibold rounded-full border transition 
              ${
                letter === 'All'
                  ? 'bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-white border-transparent'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Show Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 mb-12">
        {currentShows.map((show) => (
          <ListingShowCard key={show.id} show={show} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          className="px-3 py-1 border rounded text-sm text-gray-800 hover:bg-gray-100"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(Math.max(0, currentPage - 1), Math.min(currentPage + 2, totalPages))
          .map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-3 py-1 border rounded text-sm ${
                pageNum === currentPage
                  ? 'bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-white'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {pageNum}
            </button>
          ))}

        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <span className="px-2 text-sm text-gray-500">...</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-3 py-1 border rounded text-sm text-gray-800 hover:bg-gray-100"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          className="px-3 py-1 border rounded text-sm text-gray-800 hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Mobile Featured Shows Component
const MobileFeaturedShows: React.FC<{ shows: Show[] }> = ({ shows }) => {
    const navigate = useNavigate();
  return (
    <div className="block sm:hidden w-full py-8 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 font-brygada">Featured Shows</h2>

      <div className="space-y-8">
        {shows.slice(0, 4).map((show) => (
          <div key={show.id} className="w-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-lg">
            <img
              src={show.featuredImage}
              alt={show.title}
              className="w-full h-[400px] object-cover"
              onClick={() => navigate('/shows')}
            />
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-brygada font-bold">{show.title}</h3>
                <p className="text-sm italic text-gray-500 whitespace-nowrap ml-4">
                  {show.network} Series
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-white px-12 py-3 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition-all">
          View More
        </button>
      </div>
    </div>
  );
};

// Mobile Shows Listing Component
const MobileShowsListing: React.FC<{ shows: Show[] }> = ({ shows }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('all');
  const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredShows = shows.filter((show) => {
    const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNetwork =
      selectedNetwork === 'all' || show.network.toLowerCase().includes(selectedNetwork.toLowerCase());
    return matchesSearch && matchesNetwork;
  });

  return (
    <div className="block sm:hidden px-4 pb-12 space-y-8">
      <h2 className="text-2xl font-bold text-center font-brygada">Find Shows</h2>

      {/* Search */}
      <div className="flex">
        <input
          type="text"
          placeholder="Search For Shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 text-sm text-gray-800 border rounded-l-full font-afacad focus:outline-none"
        />
        <button className="px-5 bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-black font-afacad text-sm rounded-r-full">
          Search
        </button>
      </div>

      {/* Networks */}
      <div className="flex flex-wrap gap-x-3 gap-y-3">
        {networks.map((network) => (
          <button
            key={network.id}
            onClick={() => setSelectedNetwork(network.id)}
            className={`text-sm font-afacad px-4 py-1.5 rounded-full border 
              ${
                selectedNetwork === network.id
                  ? 'bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-white border-transparent'
                  : 'border-black text-black bg-white'
              }`}
          >
            {network.label}
          </button>
        ))}
      </div>

      {/* Alphabet */}
      <div className="grid grid-cols-8 gap-x-[6px] gap-y-[10px] justify-items-center">
        {alphabet.map((letter, index) => (
          <button
            key={index}
            className={`w-9 h-9 text-sm font-semibold font-afacad rounded-full border
              ${
                letter === 'All'
                  ? 'bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-white border-transparent'
                  : 'text-black border-black'
              }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Filtered Show List */}
      <div className="space-y-6">
        {filteredShows.map((show) => (
          <ListingShowCard key={show.id} show={show} isMobile />
        ))}
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {isMobile ? (
          <>
            <MobileFeaturedShows shows={featuredShows} />
            <MobileShowsListing shows={featuredShows} />
          </>
        ) : (
          <>
            <FeaturedShows shows={featuredShows} />
            <ShowsListing shows={featuredShows} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;