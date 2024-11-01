import React, { useEffect, useState, useRef } from 'react';
import { fetchGalleryImages } from '../services/api';
import { Box, Typography } from '@mui/material';

const RecentlyGenerated = () => {
  const [, setImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchGalleryImages();
        setImages(data);
        setDisplayedImages([...data, ...data]);
      } catch (error) {
        console.error('Error fetching recently generated images:', error);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;

        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
          setDisplayedImages((prevImages) => [...prevImages.slice(1), prevImages[0]]);
          containerRef.current.scrollLeft -= containerRef.current.children[0].offsetWidth;
        }
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, [displayedImages]);

  return (
    <Box sx={{ backgroundColor: '#654236', paddingBottom: '3rem', overflow: 'hidden' }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Rockwell", serif',
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#F7EBDE',
          marginBottom: '1rem',
          paddingTop: '1rem',
        }}
      >
        Recently Generated
      </Typography>

      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          gap: '1rem',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
        }}
      >
        {displayedImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '240px',
              flexShrink: 0,
              backgroundColor: '#F7EBDE',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <Box
              component="img"
              src={image.imageUrl}
              alt={image.bookName}
              sx={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '0.5rem',
              }}
            />
            <Typography variant="subtitle1" sx={{ color: '#654236' }}>
              {image.bookName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentlyGenerated;
