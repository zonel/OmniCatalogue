import React from 'react';
import Hero from '../components/Hero';
import WaveDividerTop from '../components/WaveDividerTop';
import RecentlyGenerated from '../components/RecentlyGenerated';
import HowItWorks from '../components/HowItWorks';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WaveDividerTop />
      <RecentlyGenerated />
      <HowItWorks />
    </>
  );
};

export default HomePage;
