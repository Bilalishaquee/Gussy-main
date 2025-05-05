import React from 'react';
import Layout from '../components/Layout/Layout';
import { Star, Award, TrendingUp, Heart, Smile, ShoppingBag } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import FAQSection from '../components/FAQSection';


const AboutPage: React.FC = () => {
  const coverageAreas = [
    { icon: Star, title: 'Reality TV' },
    { icon: Award, title: 'Red Carpet' },
    { icon: TrendingUp, title: 'Street Style' },
    { icon: Heart, title: 'Home Decor' },
    { icon: Smile, title: 'Beauty' },
    { icon: ShoppingBag, title: 'Shop Finds' },
  ];

  const findingProcess = [
    {
      step: 1,
      title: 'Spot the Look',
      description: 'Our team monitors red carpets, TV shows, paparazzi photos, and social media 24/7 to catch the latest celebrity fashion moments.',
    },
    {
      step: 2,
      title: 'Identify the Pieces',
      description: 'Using our extensive fashion knowledge and industry connections, we track down the exact brand, designer, and item details.',
    },
    {
      step: 3,
      title: 'Find Alternatives',
      description: 'For each high-end piece, we source similar styles at various price points so everyone can achieve the look.',
    },
    {
      step: 4,
      title: 'Share with Our Community',
      description: 'We publish our finds with shoppable links, styling tips, and exclusive discount codes for our readers.',
    },
  ];

  return (
   
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-black text-white flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Fashion Background" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative text-center z-10 px-4">
            <h1 className="text-5xl font-serif mb-4">Where Fashion Meets Accessibility</h1>
            <p className="text-xl">Fashion that fits everyone</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-serif text-center mb-12">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Founded with a passion for making celebrity fashion accessible to everyone, Celebrity Style Spotlight has revolutionized how fans connect with their favorite star's style. Our expert fashion detectives track down exact matches and affordable alternatives to the most coveted celebrity looks, making glamour achievable at every price point.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              What started as a small blog has grown into a thriving community of fashion enthusiasts who share our belief that everyone deserves to feel like a star. Our dedicated team works tirelessly to bring you the latest styles, ensuring that the magic of celebrity fashion is just a click away.
            </p>
          </div>
        </div>

        {/* What We Cover Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-12">What We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {coverageAreas.map((area, index) => (
                <div key={index} className="border border-[#D4A373] rounded-lg p-6 flex flex-col items-center hover:bg-white transition-colors">
                  <area.icon className="w-8 h-8 text-[#D4A373] mb-3" />
                  <span className="text-sm font-medium">{area.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How We Find The Styles Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-serif text-center mb-12">How We Find The Styles</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D4A373]" />
              {findingProcess.map((step, index) => (
                <div key={index} className="relative pl-20 pb-12 last:pb-0">
                  <div className="absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#D4A373] border-4 border-white" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NewsletterSignup />
        <FAQSection />
      </div>

  );
};

export default AboutPage;