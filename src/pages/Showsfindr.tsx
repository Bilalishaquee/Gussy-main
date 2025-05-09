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
      const scrollAmount = newIndex * (carouselRef.current.clientWidth);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const visibleShows = shows.slice(
    currentSlide * showsPerView,
    (currentSlide * showsPerView) + showsPerView
  );

  return (
    <div className="w-full py-6 sm:py-10">
      <div className="container px-4 mx-auto">
        <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-center">Featured Shows</h2>
        
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-white bg-black bg-opacity-50 rounded-full -left-2 sm:-left-5 top-1/2 transform -translate-y-1/2 hover:bg-opacity-70 transition-all duration-200"
            aria-label="Previous shows"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div 
            ref={carouselRef}
            className="flex overflow-hidden"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                width: `${100 * Math.ceil(shows.length / showsPerView)}%`,
                transform: `translateX(-${currentSlide * (100 / Math.ceil(shows.length / showsPerView))}%)` 
              }}
            >
              {shows.map((show) => (
                <div 
                  key={show.id} 
                  className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <ShowCard show={show} />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-white bg-black bg-opacity-50 rounded-full -right-2 sm:-right-5 top-1/2 transform -translate-y-1/2 hover:bg-opacity-70 transition-all duration-200"
            aria-label="Next shows"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-black w-3 sm:w-4' : 'bg-gray-300'
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

  const filteredShows = shows.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNetwork = selectedNetwork === 'all' || 
      show.network.toLowerCase().includes(selectedNetwork.toLowerCase());
    return matchesSearch && matchesNetwork;
  });

  const totalPages = Math.ceil(filteredShows.length / showsPerPage);
  const currentShows = filteredShows.slice(
    (currentPage - 1) * showsPerPage,
    currentPage * showsPerPage
  );

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">Find Shows</h2>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for Shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {networks.map(network => (
          <button
            key={network.id}
            onClick={() => setSelectedNetwork(network.id)}
            className={`px-4 py-1 text-sm font-medium rounded-full transition-colors
              ${selectedNetwork === network.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {network.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-1 mb-8">
        {alphabet.map(letter => (
          <button
            key={letter}
            className="w-8 h-8 text-sm font-medium text-gray-700 transition-colors rounded-full hover:bg-gray-100"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentShows.map(show => (
          <div key={show.id} className="flex justify-center">
            <ShowCard show={show} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          First
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 text-sm font-medium rounded ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          Last
        </button>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
   
      <main>
        <FeaturedShows shows={featuredShows} />
        <ShowsListing shows={featuredShows} />
      </main>
      
     
    </div>
  );
}

export default App;