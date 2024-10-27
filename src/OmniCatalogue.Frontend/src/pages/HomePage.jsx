import React from 'react';
import Hero from '../components/Hero';
import WaveDividerTop from '../components/WaveDividerTop';
import RecentlyGenerated from '../components/RecentlyGenerated';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WaveDividerTop /> {/* Ensure this sits directly below Hero */}
      <RecentlyGenerated />
    </>
  );
};

export default HomePage;
