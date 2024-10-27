import React from 'react';
import Hero from '../components/Hero';
import { Typography, Container, Box } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container maxWidth="lg" className="my-16 text-center">
        <Box className="text-gray-800">
          <Typography variant="h4" className="text-3xl font-semibold mb-6">
            About OmniCatalogue
          </Typography>
          <Typography variant="body1" className="text-lg leading-relaxed">
            OmniCatalogue is a one-stop platform for generating and showcasing AI-generated images.
            Users can browse through a diverse gallery of AI-created visuals or generate their own
            unique images using our advanced image generator. Dive into the world of AI creativity
            and explore what’s possible with modern technology.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
