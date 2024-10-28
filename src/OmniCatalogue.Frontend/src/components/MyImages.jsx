import React, { useEffect, useState } from 'react';
import ImageGalleryCard from './ImageGalleryCard';
import { fetchMyImages } from '../services/api';

const MyImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchMyImages();
        setImages(data);
      } catch (error) {
        console.error("Error fetching user's images:", error);
      }
    };
    loadImages();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
      justifyContent: 'center',
    }}>
      {images.length > 0 ? (
        images.map((image) => <ImageGalleryCard key={image.imageUrl} image={image} />)
      ) : (
        <p>No images found for this user.</p>
      )}
    </div>
  );
};

export default MyImages;
