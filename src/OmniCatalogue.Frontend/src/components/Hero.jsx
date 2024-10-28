import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const Hero = () => {
  const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image4.png',
  ];
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, pause]);

  return (
    <Box className="w-full bg-mainBg text-accent py-16 px-4 shadow-md">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
        
        <Box className="md:w-1/2 text-left mb-8 md:mb-0 pr-6">
          <Typography 
            variant="h3"
            sx={{
              fontFamily: '"Rockwell", serif',
              fontSize: '4.5rem',
              fontWeight: 'bold',
              lineHeight: 1.3,
              marginBottom: '2rem',
              color: '#14281D',
            }}
          >
            Bringing Literature to Life with AI Imagery
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              fontFamily: '"Rockwell", serif',
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: '#654236',
            }}
          >
            Dive into a unique platform where book scenes become visually immersive experiences. 
            Through AI-powered visuals, OmniCatalogue allows readers and authors to see their 
            favorite literary moments brought to life in vivid detail. Discover a new dimension 
            to storytelling and enrich your reading journey.
          </Typography>
        </Box>

        <Box
          className="relative md:w-1/2 flex justify-center items-center"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Generated Image ${index + 1}`}
              className={`absolute w-96 h-96 object-cover rounded-lg shadow-md transition-opacity duration-500`}
              style={{
                transform: `rotate(${index * 5 - 10}deg)`, // Slight rotation for stacked effect
                opacity: index === currentImageIndex ? 1 : 0.4, // Front image is fully visible, others are translucent
                zIndex: index === currentImageIndex ? 10 : index, // Ensure the current image is on top
                transition: 'opacity 1s ease-in-out, z-index 0s', // Smooth opacity transition with slower fade-in
              }}
            />
          ))}
        </Box>
        
      </div>
    </Box>
  );
};

export default Hero;
