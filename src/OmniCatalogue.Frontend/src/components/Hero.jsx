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
    <Box 
      sx={{ 
        width: '100%', 
        backgroundColor: '#F7EBDE', 
        color: '#654236', 
        py: 16, 
        px: 4, 
        boxShadow: 1, 
        pt: { xs: 10, md: 16 }
      }}
    >
      <Box 
        className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center" 
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        
        <Box 
          sx={{ 
            width: '100%', 
            textAlign: { xs: 'center', md: 'left' }, 
            mb: { xs: 8, md: 0 }, 
            pr: { md: 6 } 
          }}
        >
          <Typography 
            variant="h3"
            sx={{
              fontFamily: '"Rockwell", serif',
              fontSize: { xs: '2rem', md: '4.5rem' }, 
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
              fontSize: { xs: '1rem', md: '1.125rem' }, 
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
          className="relative flex justify-center items-center"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          sx={{
            width: { xs: '100%', sm: '75%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            mt: { xs: 8, md: 0 },
            zIndex: 1,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image}
              alt={`Generated Image ${index + 1}`}
              sx={{
                width: { xs: '80%', sm: '85%', md: '24rem' },
                height: { xs: 'auto', md: '24rem' },
                objectFit: 'cover',
                borderRadius: '8px',
                position: 'absolute',
                opacity: index === currentImageIndex ? 1 : 0.4,
                zIndex: index === currentImageIndex ? 10 : index,
                transition: 'opacity 1s ease-in-out',
                transform: { md: `rotate(${index * 5 - 10}deg)` },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
