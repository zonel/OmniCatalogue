import React from 'react';
import Gallery from '../components/Gallery';
import { Typography } from '@mui/material';

const GalleryPage = () => {
  return (
      <div className="max-w-screen-xl mx-auto my-16 text-center px-4">
        <Typography variant="h4" className="text-3xl font-semibold mb-12 text-gray-800">
          Explore the Gallery
        </Typography>
        <Gallery />
      </div>
  );
};

export default GalleryPage;
