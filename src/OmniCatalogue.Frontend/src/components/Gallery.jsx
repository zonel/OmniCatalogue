import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchGalleryImages } from '../services/api';
import ImageGalleryCard from './ImageGalleryCard';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchGalleryImages();
      setImages(data);
    };
    loadImages();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {images.map((image) => (
        <Box
          key={image.imageUrl}
          sx={{
            flex: '1 1 300px',
            maxWidth: '350px',
          }}
        >
          <ImageGalleryCard image={image} />
        </Box>
      ))}
    </Box>
  );
};

export default Gallery;
