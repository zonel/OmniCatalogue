import React from 'react';
import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import ImageIcon from '@mui/icons-material/Image';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const HowItWorks = () => {
  const steps = [
    {
      icon: <AccountCircleIcon sx={{ fontSize: 50, color: '#654236' }} />,
      title: 'Create an Account',
      description: 'Sign up to start generating images for your favorite books.',
    },
    {
      icon: <BookIcon sx={{ fontSize: 50, color: '#654236' }} />,
      title: 'Choose a Book',
      description: 'Find the book or scene you want to visualize with AI.',
    },
    {
      icon: <ImageIcon sx={{ fontSize: 50, color: '#654236' }} />,
      title: 'Generate Image',
      description: 'Use the image generator to create AI-powered visuals.',
    },
    {
      icon: <AccountBoxIcon sx={{ fontSize: 50, color: '#654236' }} />,
      title: 'View in Profile',
      description: 'Check your generated images in your profile.',
    },
  ];

  return (
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#F7EBDE', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: '2rem', fontFamily: 'Rockwell, serif', color: '#654236' }}>
        How It Works
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '1.5rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Box sx={{ mb: '1rem' }}>{step.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: '0.5rem', color: '#654236', fontFamily: 'Rockwell, serif' }}>
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#654236', fontFamily: 'Rockwell, serif' }}>
                {step.description}
              </Typography>
            </Box>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <Box
                sx={{
                  width: '100px',
                  height: '2px',
                  backgroundColor: '#654236',
                  margin: '0 10px',
                  zIndex: 0,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default HowItWorks;
