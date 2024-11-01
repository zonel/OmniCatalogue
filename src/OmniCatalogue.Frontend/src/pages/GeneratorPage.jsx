import React from 'react';
import ImageGenerator from '../components/ImageGenerator';
import { Box, Typography } from '@mui/material';

const GeneratorPage = () => {
  return (
    <Box className="generator-page" sx={{ maxWidth: 'screen-lg', mx: 'auto', p: 8, fontFamily: 'Rockwell, serif' }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 10,
          fontFamily: 'Rockwell, serif',
          color: '#654236',
        }}
      >
        Generate a New Image
      </Typography>
      <ImageGenerator />
    </Box>
  );
};

export default GeneratorPage;
