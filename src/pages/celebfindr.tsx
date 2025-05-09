import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import RealHousewives from '../components/RealHousewives';
import img20 from '../Assets/HOMEPAGE/20.png';
import img21 from '../Assets/HOMEPAGE/21.png';
import img22 from '../Assets/HOMEPAGE/22.png';
import img23 from '../Assets/HOMEPAGE/23.png';
import img24 from '../Assets/HOMEPAGE/24.png';
import img25 from '../Assets/HOMEPAGE/25.png';
import img26 from '../Assets/HOMEPAGE/26.png';
import img27 from '../Assets/HOMEPAGE/27.png';

// Types
interface Celebrity {
  id: string;
  featuredTitle: string;  // Title for featured view
  listingTitle: string;   // Title for listing view
  featuredImage: string;
  listingImage: string;
  profession?: string;
  network?: string;
  networkType?: 'Netflix' | 'HBO' | 'Apple';
}

// Celebrity Data with separate titles and images
const featuredCelebrities: Celebrity[] = [
  {
    id: '1',
    featuredTitle: 'Brynn Whitfield',  // Simple name for featured view
    listingTitle: 'Madison LeCroy',  // Descriptive for listing
    featuredImage: img24,
    listingImage: img20,
    profession: ''
  },
  {
    id: '2',
    featuredTitle: 'Ciara Miller',
    listingTitle: 'Dorit Kemsley',
    featuredImage: img25,
    listingImage: img21,
    profession: ''
  },
  {
    id: '3',
    featuredTitle: 'Lisa Barlow',
    listingTitle: 'Kyle Richards',
    featuredImage: img26,
    listingImage: img22,
    profession: ''
  },
  {
    id: '4',
    featuredTitle: 'Marlo Hampton',
    listingTitle: 'Paige DeSorbo',
    featuredImage: img27,
    listingImage: img23,
    profession: ''
  },
  {
    id: '5',
    featuredTitle: 'Madison LeCroy',
    listingTitle: 'Brynn Whitfield',
    featuredImage: img20,
    listingImage: img24,
 
    
  },
    {
    id: '6',
    featuredTitle: 'Dorit Kemsley',
    listingTitle: 'Ciara Miller',
    featuredImage: img21,
    listingImage: img25,
    network: '',
   
  },
    {
    id: '7',
    featuredTitle: 'Kyle Richards',
    listingTitle: 'Lisa Barlow',
    featuredImage: img22,
    listingImage: img26,
    network: '',
   
  },
      {
    id: '8',
    featuredTitle: 'Paige DeSorbo',
    listingTitle: 'Marlo Hampton',
    featuredImage: img23,
    listingImage: img27,
    network: '',
  
  },

  // Add more celebrities as needed
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

// Featured Celebrity Card Component
const FeaturedCelebrityCard: React.FC<{ celebrity: Celebrity }> = ({ celebrity }) => {
  const getBadgeStyle = () => {
    if (!celebrity.networkType) return '';
    switch (celebrity.networkType) {
      case 'Netflix': return 'bg-red-600';
      case 'HBO': return 'bg-blue-900';
      case 'Apple': return 'bg-gray-800';
      default: return 'bg-gray-700';
    }
  };

 return (
    <div className="relative flex-shrink-0 w-[300px] mx-4 overflow-hidden transition-transform duration-300 transform hover:scale-[1.02] group">
      <div className="relative h-[450px] w-full overflow-hidden rounded-xl shadow-xl">
        <img 
          src={celebrity.featuredImage} 
          alt={celebrity.featuredTitle} 
          className="object-cover w-full h-full transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold tracking-tight">
          {celebrity.featuredTitle}
        </h3>
        <div className="flex items-center mt-3 space-x-3">
          <span className={`px-3 py-1.5 text-sm font-medium rounded ${getBadgeStyle()}`}>
            {celebrity.network}
          </span>
          
        </div>
      </div>
    </div>
  );
};

// Featured Celebrities Component
const FeaturedCelebrities: React.FC<{ celebrities: Celebrity[] }> = ({ celebrities }) => {
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
              {celebrities.map((celebrity) => (
                 <FeaturedCelebrityCard celebrity={celebrity} />
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

// Listing Celebrity Card Component
const ListingCelebrityCard: React.FC<{ celebrity: Celebrity }> = ({ celebrity }) => {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="rounded-lg overflow-hidden bg-gray-50 border shadow-sm transition-transform duration-300 hover:scale-105">
        <img
          src={celebrity.listingImage}
          alt={celebrity.listingTitle}
          className="w-full h-[330px] object-cover rounded-t-md"
        />
        <div className="px-3 py-3 font-afacad">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-brygada font-semibold">{celebrity.listingTitle}</h3>
            {celebrity.profession && (
              <p className="text-[13px] italic text-gray-500 whitespace-nowrap">{celebrity.profession}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Celebrities Listing Component
const CelebritiesListing: React.FC<{ celebrities: Celebrity[] }> = ({ celebrities }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 8;

  const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredCelebrities = celebrities.filter((celebrity) => {
    return celebrity.listingTitle.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredCelebrities.length / showsPerPage);
  const currentCelebrities = filteredCelebrities.slice(
    (currentPage - 1) * showsPerPage,
    currentPage * showsPerPage
  );

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="mb-6 sm:mb-8 text-3xl font-bold text-center font-brygada">Celebrity Directory</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="flex w-full max-w-3xl overflow-hidden border rounded-full">
          <input
            type="text"
            placeholder="Search Celebrities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 text-sm text-gray-800 bg-white focus:outline-none rounded-l-full"
          />
          <button className="px-6 bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-white font-medium rounded-r-full">
            Search
          </button>
        </div>
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

      {/* Celebrity Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 mb-12">
        {currentCelebrities.map((celebrity) => (
          <ListingCelebrityCard key={celebrity.id} celebrity={celebrity} />
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

// Mobile Featured Celebrities Component
const MobileFeaturedCelebrities: React.FC<{ celebrities: Celebrity[] }> = ({ celebrities }) => {
  return (
    <div className="block sm:hidden w-full py-6 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 font-brygada">Featured Stars</h2>

      <div className="space-y-6">
        {celebrities.slice(0, 4).map((celebrity) => (
          <div
            key={celebrity.id}
            className="w-full mx-auto rounded-lg overflow-hidden bg-gray-50 border shadow-sm"
          >
            <img
              src={celebrity.featuredImage}
              alt={celebrity.featuredTitle}
              className="w-full h-[330px] object-cover rounded-t-md"
            />
            <div className="px-4 py-4 font-afacad">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-brygada font-semibold">{celebrity.featuredTitle}</h3>
                {celebrity.profession && (
                  <p className="text-[13px] italic text-gray-500 whitespace-nowrap">
                    {celebrity.profession}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-black px-10 py-2 rounded-full text-[15px] font-afacad shadow-md hover:scale-105 transition-all">
          View More
        </button>
      </div>
    </div>
  );
};

// Mobile Celebrities Listing Component
const MobileCelebritiesListing: React.FC<{ celebrities: Celebrity[] }> = ({ celebrities }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredCelebrities = celebrities.filter((celebrity) => {
    return celebrity.listingTitle.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="block sm:hidden px-4 pb-12 space-y-8">
      <h2 className="text-2xl font-bold text-center font-brygada">Celebrity Search</h2>

      {/* Search */}
      <div className="flex">
        <input
          type="text"
          placeholder="Search Celebrities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 text-sm text-gray-800 border rounded-l-full font-afacad focus:outline-none"
        />
        <button className="px-5 bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-black font-afacad text-sm rounded-r-full">
          Search
        </button>
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

      {/* Filtered Celebrity List */}
      <div className="space-y-6">
        {filteredCelebrities.map((celebrity) => (
          <div
            key={celebrity.id}
            className="w-full rounded-lg overflow-hidden bg-gray-50 border shadow-sm"
          >
            <img
              src={celebrity.listingImage}
              alt={celebrity.listingTitle}
              className="w-full h-[330px] object-cover rounded-t-md"
            />
            <div className="px-4 py-4 font-afacad">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-brygada font-semibold">{celebrity.listingTitle}</h3>
                {celebrity.profession && (
                  <p className="text-[13px] italic text-gray-500 whitespace-nowrap">
                    {celebrity.profession}
                  </p>
                )}
              </div>
            </div>
          </div>
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
            <MobileFeaturedCelebrities celebrities={featuredCelebrities} />
            <MobileCelebritiesListing celebrities={featuredCelebrities} />
          </>
        ) : (
          <>
            <FeaturedCelebrities celebrities={featuredCelebrities} />
            <CelebritiesListing celebrities={featuredCelebrities} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;