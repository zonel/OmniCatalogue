import React from 'react';
import MyImages from '../components/MyImages';
import UserInfo from '../components/UserInfo';
import { Typography, Box } from '@mui/material';

const MyImagesPage = () => {
  return (
    <Box sx={{ display: 'flex', padding: '2rem', gap: '2rem', fontFamily: 'Rockwell, serif' }}>
      <UserInfo />
      
      <Box sx={{ flex: 3 }}>
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom
          sx={{ fontFamily: 'Rockwell, serif', color: '#654236', marginBottom: '1rem' }}
        >
          My Generated Images
        </Typography>
        
        <MyImages />
      </Box>
    </Box>
  );
};

export default MyImagesPage;
