import React, { useState, useEffect } from 'react';
import { Avatar, Typography, Box, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { fetchMyImages } from '../services/api';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    imageCount: 0,
    estimatedCost: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const calculateUserStats = async () => {
      try {
        const images = await fetchMyImages();
        const imageCount = images.length;
        const estimatedCost = (imageCount * 0.10).toFixed(2);

        setUserInfo({
          name: 'John Doe',
          imageCount,
          estimatedCost,
        });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login', { replace: true });
        } else {
          console.error("Error calculating user stats:", error);
        }
      }
    };

    calculateUserStats();
  }, [navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#654236',
        color: '#F7EBDE',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        maxWidth: '300px',
        margin: '0 auto',
        fontFamily: 'Rockwell, serif',
      }}
    >
      <Avatar
        sx={{
          width: '80px',
          height: '80px',
          mb: '1rem',
          bgcolor: '#F7EBDE',
          color: '#654236',
        }}
      >
        <AccountCircleIcon sx={{ fontSize: '3rem' }} />
      </Avatar>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: '0.5rem',
          fontFamily: 'Rockwell, serif',
        }}
      >
        {userInfo.name}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: '0.5rem',
          fontFamily: 'Rockwell, serif',
        }}
      >
        Images Generated: {userInfo.imageCount}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: '0.5rem',
          fontFamily: 'Rockwell, serif',
        }}
      >
        Estimated Cost: ${userInfo.estimatedCost}
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: '1rem',
          backgroundColor: '#F7EBDE',
          color: '#654236',
          fontFamily: 'Rockwell, serif',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#e6dac9',
          },
        }}
        onClick={() => navigate('/generate')}
      >
        Generate More
      </Button>
    </Box>
  );
};

export default UserInfo;
