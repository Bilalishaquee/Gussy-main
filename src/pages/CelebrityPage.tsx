import React from 'react';
import CelebrityProfile from '../components/Celebrity/CelebrityProfile';
import ShowsGrid from '../components/Shows/ShowsGrid';
import OutfitsGrid from '../components/Outfits/OutfitsGrid';

// Import images for profile, shows, and outfits
import profileImage from '../Assets/celeb/1.png';  // Profile Image
import showImage1 from '../Assets/celeb/2.png';
import showImage2 from '../Assets/celeb/3.png';
import showImage3 from '../Assets/celeb/4.png';
import outfitImage1 from '../Assets/celeb/5.png';
import outfitImage2 from '../Assets/celeb/6.png';
import outfitImage3 from '../Assets/celeb/7.png';
import outfitImage4 from '../Assets/celeb/8.png';
import outfitImage5 from '../Assets/celeb/9.png';
import outfitImage6 from '../Assets/celeb/10.png';
import outfitImage7 from '../Assets/celeb/11.png';
import outfitImage8 from '../Assets/celeb/12.png';
import outfitImage9 from '../Assets/celeb/13.png';
import outfitImage10 from '../Assets/celeb/14.png';
import outfitImage11 from '../Assets/celeb/15.png';
import outfitImage12 from '../Assets/celeb/16.png';

const CelebrityPage: React.FC = () => {
  const shows = [
    {
      id: 1,
      title: '',
      image: showImage1,
      network: ' ',
    },
    {
      id: 2,
      title: '',
      image: showImage2,
      network: ' ',
    },
    {
      id: 3,
      title: '',
      image: showImage3,
      network: ' ',
    },
    {
      id: 4,
      title: '',
      image: showImage1,
      network: ' ',
    },
    {
      id: 5,
      title: '',
      image: showImage2,
      network: ' ',
    },
    {
      id: 6,
      title: '',
      image: showImage3,
      network: ' ',
    },
  ];

  const outfits = [
    { id: 1, title: "Angie Katsanevas' Green Cargo Jacket & Belt", image: outfitImage1, description: "Worn during Season Finale Episode", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 2, title: "Angie Katsanevas' White Fringe Top & Jeans", image: outfitImage2, description: "Seen at Reunion Part 1", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 3, title: "Angie Katsanevas' Season 3 Reunion Gold Dress", image: outfitImage3, description: "Season 3 Reunion Special", source: "Real Housewives of Salt Lake City Season 3" },
    { id: 4, title: "Angie Katsanevas' Green Crochet Crop Top and Pants", image: outfitImage4, description: "Brunch Scene Episode 5", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 5, title: "Angie Katsanevas' Gold Faux Leather Blazer Slip", image: outfitImage5, description: "Dinner Scene Episode 7", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 6, title: "Angie Katsanevas' White Red Sequin Embellish Top", image: outfitImage6, description: "Charity Gala Episode 8", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 7, title: "Angie Katsanevas' Pink High Waisted Shorts", image: outfitImage7, description: "Beach Trip Episode 10", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 8, title: "Angie Katsanevas' Black Sequins Bustier Dress", image: outfitImage8, description: "Season Finale Party", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 9, title: "Angie Katsanevas' Yeezy Daughter Sweatshirt", image: outfitImage9, description: "Confessional Episode 12", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 10, title: "Angie Katsanevas' Turquoise Dog Thunder Shirt", image: outfitImage10, description: "Dog Park Scene", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 11, title: "Angie Katsanevas' Favorite Daughter Sweatshirt", image: outfitImage11, description: "Dog Park Scene", source: "Real Housewives of Salt Lake City Fashion" },
    { id: 12, title: "Angie Katsanevas' Turquoise Dog Thunder Shirt", image: outfitImage12, description: "Dog Park Scene", source: "Real Housewives of Salt Lake City Fashion" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-2/5">
          <CelebrityProfile
            name="Angie Katsanevas"
            image={profileImage}
            show="The Real Housewives of Salt Lake City"
            location="Salt Lake City"
            network="  TV"
            description="Angie Katsanevas is known for her statement making style and her signature sunglasses. Her outfits are bold and bright, and she is always giving her signature over the top style that we love. Angie is always rocking the latest designers and never comes to play when it comes to her looks."
          />
        </div>

        <div className="w-full md:w-3/5">
          <ShowsGrid shows={shows} title="Shows" />
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Angie Katsanevas Outfits</h2>
      </div>

      <div>
        <OutfitsGrid outfits={outfits} />
      </div>
      
      <div className="text-center mt-6">
      <button
  className="text-black px-6 py-2 sm:px-10 sm:py-3 rounded-full font-medium transition-all duration-300 mb-4 sm:mb-0"
  style={{
    background: 'linear-gradient(to right, #b87d2e, #f1d3a0, #b87d2e)',
  }}
>
  See More Outfits
</button>

      </div>
    </div>
  );
};

export default CelebrityPage;