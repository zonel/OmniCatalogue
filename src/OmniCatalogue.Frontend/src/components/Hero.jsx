import React from 'react';
import { Typography, Box } from '@mui/material';

const Hero = () => {
  const images = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ];

  return (
    <Box className="w-full bg-white text-gray-900 py-16 px-4 shadow-md">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
        
        <Box className="md:w-1/2 text-left mb-8 md:mb-0 pr-6">
          <Typography 
            variant="h3" 
            className="text-3xl font-bold leading-tight mb-4"
          >
            Bringing Literature to Life with AI Imagery
          </Typography>
          <Typography 
            variant="body1" 
            className="text-lg leading-relaxed"
          >
            Dive into a unique platform where book scenes become visually immersive experiences. 
            Through AI-powered visuals, OmniCatalogue allows readers and authors to see their 
            favorite literary moments brought to life in vivid detail. Discover a new dimension 
            to storytelling and enrich your reading journey.
          </Typography>
        </Box>

        <Box className="md:w-1/2 flex flex-wrap justify-center gap-4">
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Generated Image ${index + 1}`}
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          ))}
        </Box>
        
      </div>
    </Box>
  );
};

export default Hero;
