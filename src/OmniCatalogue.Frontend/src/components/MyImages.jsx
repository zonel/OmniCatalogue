import React, { useEffect, useState } from 'react';
import ImageGalleryCard from './ImageGalleryCard';
import { fetchMyImages } from '../services/api';
import { Box, Typography } from '@mui/material';

const MyImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchMyImages();
        setImages(data);
      } catch (error) {
        console.error("Error fetching user's images:", error);
      }
    };
    loadImages();
  }, []);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: '1.5rem',
        justifyItems: 'center',
      }}
    >
      {images.length > 0 ? (
        images.map((image) => <ImageGalleryCard key={image.imageUrl} image={image} />)
      ) : (
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#654236' }}>
          No images found for this user.
        </Typography>
      )}
    </Box>
  );
};

export default MyImages;
