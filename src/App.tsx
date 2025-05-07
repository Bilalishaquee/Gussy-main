import React from 'react';
import { Routes, Route ,useLocation  } from 'react-router-dom';
import { useMemo } from 'react';
// Shared Components
import Header from './components/Header';
import Hero from './components/Hero';
import FindAndBuy from './components/FindAndBuy';
import TopPicks from './components/TopPicks';
import AsSeenOn from './components/AsSeenOn';
import TrendingCelebs from './components/TrendingCelebs';
import RealHousewives from './components/RealHousewives';
import TVShows from './components/TVShows';
import ShowSection from './components/ShowSection';
import More from './components/Morelatest';
import Footer from './components/Footer';

// Pages
import Fashion from './pages/Fashion';
import Celbrity from './pages/CelebrityPage';
import Shows from './pages/ShowsPage';
import Terms from './pages/TermsOfservice';
import Product from './pages/ProductPage';
import About from './pages/AboutPage';
import Getin from './pages/Getin';

// Data
import { rhobhReunion } from './data/rhobhReunion';
import { summerHouse } from './data/summerHouse';
import { rhoa } from './data/rhoa';

function App() {

  const location = useLocation();

  const headerProps = useMemo(() => {
    const isHomePage = location.pathname === '/';
    const lightHeaderPages = new Set(['/celebrity', '/shows', '/product']);
    const shouldHaveLightHeader = lightHeaderPages.has(location.pathname);
    const shouldUseSecondaryLogo = lightHeaderPages.has(location.pathname);

    return {
      variant: shouldHaveLightHeader ? ('light' as 'light' | 'dark') : ('dark' as 'light' | 'dark'),
      hideLogo: isHomePage,
      useSecondaryLogo: shouldUseSecondaryLogo
    };
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-white">
     <Header {...headerProps} />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <FindAndBuy />
              <TopPicks />
              <AsSeenOn />
              <TrendingCelebs />
              <RealHousewives />
              <TVShows />
              <ShowSection title="#RHOBH Season 14 Reunion Looks" items={rhobhReunion} />
              <ShowSection title="#SummerHouse S9E5" items={summerHouse} />
              <ShowSection title="#RHOA S16E4" items={rhoa} />
              <More />
            </main>
          }
        />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/celebrity" element={<Celbrity />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-in-touch" element={<Getin />} />
        <Route path="*" element={<div className="p-10 text-center text-lg">404 - Page Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
