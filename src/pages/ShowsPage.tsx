import React from 'react';

import CelebrityProfile from '../components/Celebrity/CelebrityProfile';
import ShowsGrid from '../components/Shows/ShowsGrid';
import OutfitsGrid from '../components/Outfits/OutfitsGrid';

// Show images (2.png to 7.png)
import showImage2 from '../Assets/shows/2.png';
import showImage3 from '../Assets/shows/3.png';
import showImage4 from '../Assets/shows/4.png';
import showImage5 from '../Assets/shows/5.png';
import showImage6 from '../Assets/shows/6.png';
import showImage7 from '../Assets/shows/7.png';

// Celebrity profile image (1.png)
import profileImage from '../Assets/shows/1.png';

// Outfit images (5.png to 16.png)
import outfitImage5 from '../Assets/celeb/5.png';
import outfitImage6 from '../Assets/celeb/6.png';
import outfitImage7 from '../Assets/celeb/7.png';
import outfitImage8 from '../Assets/celeb/8.png';
import outfitImage9 from '../Assets/celeb/9.png';
import outfitImage10 from '../Assets/celeb/10.png';
import outfitImage11 from '../Assets/celeb/11.png';
import outfitImage12 from '../Assets/celeb/12.png';
import outfitImage13 from '../Assets/celeb/13.png';
import outfitImage14 from '../Assets/celeb/14.png';
import outfitImage15 from '../Assets/celeb/15.png';
import outfitImage16 from '../Assets/celeb/16.png';

const ShowsPage: React.FC = () => {
    const shows = [
        {
          id: 1,
          title: 'Kyle Richards',
          image: showImage2,
          
          name: 'Kyle Richards'
        },
        {
          id: 2,
          title: 'Dorit Kemsley',
          image: showImage3,
        
          name: 'Dorit Kemsley'
        },
        {
          id: 3,
          title: 'Sutton Stracke',
          image: showImage4,
          
          name: 'Sutton Stracke'
        },
        {
          id: 4,
          title: 'Kathy Hilton',
          image: showImage5,
        
          name: 'Kathy Hilton'
        },
        {
          id: 5,
          title: 'Erika Jayne',
          image: showImage6,
         
          name: 'Erika Jayne'
        },
        {
          id: 6,
          title: 'Crystal Kung Minkoff',
          image: showImage7,
        
          name: 'Crystal Kung Minkoff'
        },
      ];

  const outfits = [
    {
      id: 1,
      title: "Green Cargo Jacket & Belt",
      image: outfitImage5,
      description: "Worn during Season Finale Episode",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 2,
      title: "White Fringe Top & Jeans",
      image: outfitImage6,
      description: "Seen at Reunion Part 1",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 3,
      title: "Season 3 Reunion Gold Dress",
      image: outfitImage7,
      description: "Season 3 Reunion Special",
      source: "Real Housewives of Salt Lake City Season 3"
    },
    {
      id: 4,
      title: "Green Crochet Crop Top and Pants",
      image: outfitImage8,
      description: "Brunch Scene Episode 5",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 5,
      title: "Gold Faux Leather Blazer Slip",
      image: outfitImage9,
      description: "Dinner Scene Episode 7",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 6,
      title: "White Red Sequin Embellish Top",
      image: outfitImage10,
      description: "Charity Gala Episode 8",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 7,
      title: "Pink High Waisted Shorts",
      image: outfitImage11,
      description: "Beach Trip Episode 10",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 8,
      title: "Black Sequins Bustier Dress",
      image: outfitImage12,
      description: "Season Finale Party",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 9,
      title: "Yeezy Daughter Sweatshirt",
      image: outfitImage13,
      description: "Confessional Episode 12",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 10,
      title: "Turquoise Dog Thunder Shirt",
      image: outfitImage14,
      description: "Dog Park Scene",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 11,
      title: "Leopard Print Dress",
      image: outfitImage15,
      description: "Episode 14 Scene",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 12,
      title: "Elegant Red Gown",
      image: outfitImage16,
      description: "Season Finale",
      source: "Real Housewives of Salt Lake City Season 4"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <CelebrityProfile
            name="Real Housewives of BeverlyHills Fashion"
            image={profileImage}
            show="The Real Housewives of Salt Lake City"
            location="Salt Lake City"
            network="  TV"
            description="Angie Katsanevas is known for her statement making style and her signature sunglasses. Her outfits are bold and bright, and she is always giving her signature over the top style that we love. Angie is always rocking the latest designers and never comes to play when it comes to her looks."
          />
        </div>

        <div className="md:col-span-2">
          <ShowsGrid shows={shows} title="Celebrities" showNames={true} />
        </div>
      </div>

      <div className="mt-16">
        <OutfitsGrid
          outfits={outfits}
          title="Real Housewives of Beverly Hills Outfits"
        />
      </div>
    </div>
  );
};

export default ShowsPage;