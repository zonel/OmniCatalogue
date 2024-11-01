import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchGalleryImages } from '../services/api';
import ImageGalleryCard from './ImageGalleryCard';
import ImageDetailsModal from './ImageDetailsModal';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchGalleryImages();
      setImages(data);
    };
    loadImages();
  }, []);

  const handleCardClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

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
          onClick={() => handleCardClick(image)}
          sx={{
            flex: '1 1 300px',
            maxWidth: '350px',
            cursor: 'pointer',
          }}
        >
          <ImageGalleryCard image={image} />
        </Box>
      ))}

      {selectedImage && (
        <ImageDetailsModal
          image={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  );
};

export default Gallery;
