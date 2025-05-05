import React, { useState, useRef } from 'react';
import ShowCard from './ShowCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Show {
  id: number;
  title: string;
  image: string;
  network?: string;
  showNames?: boolean;
}

interface ShowsGridProps {
  shows: Show[];
  title?: string;
  showNames?: boolean;
}

const ShowsGrid: React.FC<ShowsGridProps> = ({ shows, title }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(shows.length / itemsPerPage);
  const swiperRef = useRef<any>(null);
  
  const startIndex = currentPage * itemsPerPage;
  const visibleShows = shows.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      
      {/* Mobile Slider (shows on screens < 768px) */}
      <div className="md:hidden">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={16}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {shows.map((show) => (
            <SwiperSlide key={show.id}>
              <div className="pb-8"> {/* Padding for pagination */}
                <ShowCard title={show.title} image={show.image} />
                {show.network && (
                  <div className="mt-3 text-center">
                    <span className="bg-pink-600 text-white text-xs font-medium py-1 px-3 rounded-full">
                      {show.network}
                    </span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Desktop Grid (shows on screens ≥ 768px) */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleShows.map((show) => (
            <div key={show.id} className="mb-5">
              <ShowCard 
                title={show.title}
                image={show.image}
                
                
              />
             
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-1 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentPage ? 'bg-black' : 'bg-gray-300'
                } transition-colors duration-200`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowsGrid;