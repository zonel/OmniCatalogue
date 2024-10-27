import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { fetchGalleryImages } from '../services/api';

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
    <Grid container spacing={4}>
      {images.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image.imageUrl}>
          <Card className="hover:shadow-2xl transition-transform transform hover:scale-105">
            <CardMedia
              component="img"
              image={image.imageUrl}
              alt={image.prompt}
              className="h-64 object-cover rounded-t-lg"
            />
            <CardContent className="bg-gray-50">
            <Typography variant="body1" className="font-semibold mb-2">
                <strong>Book:</strong> {image.bookName}
              </Typography>
              <Typography variant="body2" className="font-semibold mb-2">
                <strong>Prompt:</strong> {image.prompt}
              </Typography>
              <Typography variant="body3" color="textSecondary" className="mb-1">
                <strong>Created By:</strong> {image.createdBy}
              </Typography>
              <Typography variant="body4" color="textSecondary" className="mb-1">
                <strong>Tags:</strong> {image.tags.join(', ')}
              </Typography>
              <Typography variant="body5" color="textSecondary">
                <strong>Date:</strong> {new Date(image.createdAt).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
