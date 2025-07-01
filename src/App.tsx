import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import OriginalHeader from './components/OriginalHeader';
import OriginalHero from './components/OriginalHero';
import PopularCategories from './components/PopularCategories';
import OriginalFeaturedFields from './components/OriginalFeaturedFields';
import TrendingFields from './components/TrendingFields';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import FieldOwnersCTA from './components/FieldOwnersCTA';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <OriginalHeader />
        <OriginalHero />
        <PopularCategories />
        <OriginalFeaturedFields />
        <TrendingFields />
        <HowItWorks />
        <WhyChooseUs />
        <FieldOwnersCTA />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;