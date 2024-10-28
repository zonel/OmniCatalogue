import React, { useEffect, useState } from 'react';
import { fetchGalleryImages } from '../services/api';
import { Box, Typography } from '@mui/material';

const RecentlyGenerated = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchGalleryImages();
        const sortedImages = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setImages(sortedImages);
      } catch (error) {
        console.error('Error fetching recently generated images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#654236', paddingBottom: '3rem' }}> {/* Extended brown space at the bottom */}
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
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1rem',
          padding: '0 1rem',
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '240px',
              flexShrink: 0,
              backgroundColor: '#F7EBDE', // Bright main color for card background
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
