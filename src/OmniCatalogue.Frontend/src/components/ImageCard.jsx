import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.imageUrl} alt={image.prompt} className="image-card-img" />
      <div className="image-details">
        <p><strong>Prompt:</strong> {image.prompt}</p>
        <p><strong>Tags:</strong> {image.tags.join(', ')}</p>
        <p><strong>Created By:</strong> {image.createdBy}</p>
        <p><strong>Date:</strong> {new Date(image.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ImageCard;
