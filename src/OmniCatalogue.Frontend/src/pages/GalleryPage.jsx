import React from 'react';
import Gallery from '../components/Gallery';
import { Typography, Box } from '@mui/material';

const GalleryPage = () => {
  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', my: '4rem', textAlign: 'center', px: '1rem' }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: '3xl',
          fontWeight: 'bold',
          mb: '3rem',
          color: 'gray.800',
          fontFamily: 'Rockwell, serif',
        }}
      >
        Explore the Gallery
      </Typography>
      <Gallery />
    </Box>
  );
};

export default GalleryPage;
