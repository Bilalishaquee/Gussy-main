import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
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
}

// Show Data
const featuredShows: Show[] = [
  {
    id: '1',
    title: 'Emily In Paris',
    network: 'Netflix',
    networkType: 'Netflix',
    image: product1,
  },
  {
    id: '2',
    title: 'The White Lotus',
    network: 'HBO',
    networkType: 'HBO',
    image: product2,
  },
  {
    id: '3',
    title: 'Succession',
    network: 'HBO',
    networkType: 'HBO',
    image: product3,
  },
  {
    id: '4',
    title: 'Bridgerton',
    network: 'Netflix',
    networkType: 'Netflix',
    image: product4,
  },
  {
    id: '5',
    title: 'Ted Lasso',
    network: 'Apple TV+',
    networkType: 'Apple',
    image: 'https://images.pexels.com/photos/6177613/pexels-photo-6177613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    title: 'Stranger Things',
    network: 'Netflix',
    networkType: 'Netflix',
    image: 'https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '7',
    title: 'And Just Like That',
    network: 'HBO',
    networkType: 'HBO',
    image: 'https://images.pexels.com/photos/3880179/pexels-photo-3880179.jpeg',
  },
  {
    id: '8',
    title: 'Euphoria',
    network: 'HBO',
    networkType: 'HBO',
    image: 'https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg',
  },
  {
    id: '9',
    title: 'Gossip Girl',
    network: 'HBO',
    networkType: 'HBO',
    image: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg',
  },
  {
    id: '10',
    title: 'Killing Eve',
    network: 'BBC America',
    networkType: 'HBO',
    image: 'https://images.pexels.com/photos/4119475/pexels-photo-4119475.jpeg',
  }
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

// Show Card Component
const ShowCard: React.FC<{ show: Show }> = ({ show }) => {
  const getBadgeStyle = () => {
    switch (show.networkType) {
      case 'Netflix':
        return 'bg-red-600';
      case 'HBO':
        return 'bg-blue-900';
      case 'Apple':
        return 'bg-gray-800';
      default:
        return 'bg-gray-700';
    }
  };

  return (
    <div className="relative flex flex-col mx-2 overflow-hidden transition-transform duration-300 transform hover:scale-[1.02] group">
      <div className="relative h-[400px] sm:h-[500px] md:h-[400px] w-full sm:w-[300px] md:w-[220px] overflow-hidden rounded-lg shadow-lg">
        <img 
          src={show.image} 
          alt={show.title} 
          className="object-cover w-full h-full transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl sm:text-2xl md:text-lg font-bold tracking-tight">
          {show.title}
        </h3>
        <div className="flex items-center mt-2 space-x-2">
          <span className={`px-2 py-1 text-sm sm:text-base md:text-xs font-medium rounded ${getBadgeStyle()}`}>
            {show.network}
          </span>
          <span className="text-sm sm:text-base md:text-xs text-gray-300">Series</span>
        </div>
      </div>
    </div>
  );
};

// Featured Shows Component
const FeaturedShows: React.FC<{ shows: Show[] }> = ({ shows }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showsPerView, setShowsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = Math.ceil(shows.length / showsPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setShowsPerView(1);
      } else if (window.innerWidth < 1024) {
        setShowsPerView(2);
      } else if (window.innerWidth < 1280) {
        setShowsPerView(3);
      } else {
        setShowsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSlide = (slideIndex: number) => {
    let newIndex = slideIndex;

    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    setCurrentSlide(newIndex);

    if (carouselRef.current) {
      const scrollAmount = newIndex * carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  return (
    <div className="w-full py-6 sm:py-10">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 sm:mb-8 text-3xl font-bold text-center font-brygada">Featured Shows</h1>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute z-10 w-8 h-8 sm:w-10 sm:h-10 border border-[#1B1C57] text-[#1B1C57] rounded-full flex items-center justify-center -left-[16px] sm:-left-[32px] top-1/2 transform -translate-y-1/2 hover:bg-gray-100 transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-hidden scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
<div
  className="flex transition-transform duration-500 ease-in-out pl-[16px] pr-[16px] sm:pl-[48px] sm:pr-[48px]"
  style={{
    width: `${shows.length * 100}%`, // each item is full width on mobile
    transform: `translateX(-${currentSlide * (100 / showsPerView)}%)`,
  }}
>
  {shows.map((show) => (
    <div
      key={show.id}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center px-2"
    >
      <div className="rounded-lg overflow-hidden bg-gray-50 border shadow-sm w-[270px] sm:w-[270px]">
        <img
          src={show.image}
          alt={show.title}
          className="w-full h-[330px] object-cover rounded-t-md"
        />
        <div className="px-3 py-3 font-afacad">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-brygada font-semibold">{show.title}</h3>
            <p className="text-[13px] italic text-gray-500 whitespace-nowrap">{show.network} Series</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

           
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute z-10 w-8 h-8 sm:w-10 sm:h-10 border border-[#1B1C57] text-[#1B1C57] rounded-full flex items-center justify-center -right-[16px] sm:-right-[32px] top-1/2 transform -translate-y-1/2 hover:bg-gray-100 transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-[#1B1C57]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


// Shows Listing Component
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
    <div key={show.id} className="w-full max-w-xs mx-auto">
      <div className="rounded-lg overflow-hidden bg-gray-50 border shadow-sm">
        <img
          src={show.image}
          alt={show.title}
          className="w-full h-[330px] object-cover rounded-t-md"
        />
        <div className="px-3 py-3 font-afacad">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-brygada font-semibold">{show.title}</h3>
            <p className="text-[13px] italic text-gray-500 whitespace-nowrap">{show.network} Series</p>
          </div>
        </div>
      </div>
    </div>
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


//Mobile Featured Shows Component
const MobileFeaturedShows: React.FC<{ shows: Show[] }> = ({ shows }) => {
  return (
    <div className="block sm:hidden w-full py-6 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 font-brygada">Featured Shows</h2>

      <div className="space-y-6">
        {shows.slice(0, 4).map((show) => (
          <div
            key={show.id}
            className="w-full mx-auto rounded-lg overflow-hidden bg-gray-50 border shadow-sm"
          >
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-[330px] object-cover rounded-t-md"
            />
            <div className="px-4 py-4 font-afacad">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-brygada font-semibold">{show.title}</h3>
                <p className="text-[13px] italic text-gray-500 whitespace-nowrap">
                  {show.network} Series
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ View More Button - OUTSIDE Bridgerton card */}
      <div className="flex justify-center mt-6">
        <button className="bg-gradient-to-r from-[#C8933C] to-[#D4A658] text-black px-10 py-2 rounded-full text-[15px] font-afacad shadow-md hover:scale-105 transition-all">
          View More
        </button>
      </div>
    </div>
  );
};
  

<>
  {/* Mobile: show 4 stacked cards (no carousel) */}
  <div className="block sm:hidden">
    <MobileFeaturedShows shows={featuredShows} />
  </div>

  {/* Desktop: carousel slider remains intact */}
  <div className="hidden sm:block">
    <FeaturedShows shows={featuredShows} />
  </div>
</>
//Mobile  Shows Listing Component
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
          <div
            key={show.id}
            className="w-full rounded-lg overflow-hidden bg-gray-50 border shadow-sm"
          >
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-[330px] object-cover rounded-t-md"
            />
            <div className="px-4 py-4 font-afacad">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-brygada font-semibold">{show.title}</h3>
                <p className="text-[13px] italic text-gray-500 whitespace-nowrap">
                  {show.network} Series
                </p>
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
 const isMobile = window.innerWidth < 640;

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