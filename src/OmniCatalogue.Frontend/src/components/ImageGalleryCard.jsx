import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const ImageGalleryCard = ({ image }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#654236',
        color: '#F7EBDE',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.4)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={image.imageUrl}
        alt={image.prompt}
        sx={{
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography
            variant="h5"  // Larger font size
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Rockwell, serif',
              color: '#F7EBDE',
              textAlign: 'center',
            }}
          >
            Book: {image.bookName}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '0.5rem' }}>
          <Typography
            variant="body2"
            sx={{ fontFamily: 'Rockwell, serif' }}
          >
            <strong>Prompt:</strong> {image.prompt}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '0.5rem' }}>
          <Typography
            variant="body2"
            sx={{ fontFamily: 'Rockwell, serif' }}
          >
            <strong>Created By:</strong> {image.createdBy}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '0.5rem' }}>
          <Typography
            variant="body2"
            sx={{ fontFamily: 'Rockwell, serif' }}
          >
            <strong>Tags:</strong> {image.tags.join(', ')}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ fontStyle: 'italic', fontFamily: 'Rockwell, serif' }}
        >
          Date: {new Date(image.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageGalleryCard;
