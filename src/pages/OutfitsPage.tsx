import React from 'react';
import Layout from '../components/Layout/Layout';
import OutfitsGrid from '../components/Outfits/OutfitsGrid';

const OutfitsPage: React.FC = () => {
  const outfits = [
    {
      id: 1,
      title: "Angie Katsanevas' Green Cargo Jacket & Belt",
      image: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Worn during Season Finale Episode",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 2,
      title: "Angie Katsanevas' White Fringe Top & Jeans",
      image: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Seen at Reunion Part 1",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 3,
      title: "Angie Katsanevas' Season 3 Reunion Gold Dress",
      image: "https://images.pexels.com/photos/6612256/pexels-photo-6612256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Season 3 Reunion Special",
      source: "Real Housewives of Salt Lake City Season 3"
    },
    {
      id: 4,
      title: "Angie Katsanevas' Green Crochet Crop Top and Pants",
      image: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Brunch Scene Episode 5",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 5,
      title: "Angie Katsanevas' Gold Faux Leather Blazer Slip",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Dinner Scene Episode 7",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 6,
      title: "Angie Katsanevas' White Red Sequin Embellish Top",
      image: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Charity Gala Episode 8",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 7,
      title: "Angie Katsanevas' Pink High Waisted Shorts",
      image: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Beach Trip Episode 10",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 8,
      title: "Angie Katsanevas' Black Sequins Bustier Dress",
      image: "https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Season Finale Party",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 9,
      title: "Angie Katsanevas' Yeezy Daughter Sweatshirt",
      image: "https://images.pexels.com/photos/1852862/pexels-photo-1852862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Confessional Episode 12",
      source: "Real Housewives of Salt Lake City Season 4"
    },
    {
      id: 10,
      title: "Angie Katsanevas' Turquoise Dog Thunder Shirt",
      image: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Dog Park Scene",
      source: "Real Housewives of Salt Lake City Season 4"
    },
  ];

  return (
    <Layout>
      <OutfitsGrid 
        outfits={outfits} 
        title="Angie Katsanevas Outfits" 
      />
    </Layout>
  );
};

export default OutfitsPage;