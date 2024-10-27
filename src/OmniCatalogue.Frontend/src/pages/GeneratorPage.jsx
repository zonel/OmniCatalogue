import React from 'react';
import ImageGenerator from '../components/ImageGenerator';

const GeneratorPage = () => {
  return (
    <div className="generator-page max-w-screen-lg mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-10">Generate a New Image</h2>
      <ImageGenerator />
    </div>
  );
};

export default GeneratorPage;
