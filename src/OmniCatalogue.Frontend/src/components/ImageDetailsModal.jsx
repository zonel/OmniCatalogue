import React from 'react';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageDetailsModal = ({ image, onClose }) => (
  <Modal open={!!image} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#654236',
        color: '#F7EBDE',
        borderRadius: '8px',
        overflow: 'hidden',
        maxWidth: '90vw',
        maxHeight: '90vh',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        outline: 'none',
      }}
    >
      <Box
        component="img"
        src={image.imageUrl}
        alt={image.prompt}
        sx={{
          width: { xs: '100%', md: '60%' },
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <Box sx={{ padding: '1.5rem', width: { xs: '100%', md: '40%' } }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: '1rem', right: '1rem', color: '#F7EBDE' }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', fontFamily: 'Rockwell, serif', marginBottom: '1rem' }}
        >
          Book: {image.bookName}
        </Typography>

        <Typography variant="h6" sx={{ fontFamily: 'Rockwell, serif', marginBottom: '1rem' }}>
          <strong>Prompt:</strong> {image.prompt}
        </Typography>

        <Typography variant="h6" sx={{ fontFamily: 'Rockwell, serif', marginBottom: '1rem' }}>
          <strong>Created By:</strong> {image.createdBy}
        </Typography>

        <Typography variant="h6" sx={{ fontFamily: 'Rockwell, serif', marginBottom: '1rem' }}>
          <strong>Tags:</strong> {image.tags.join(', ')}
        </Typography>

        <Typography variant="h6" sx={{ fontStyle: 'italic', fontFamily: 'Rockwell, serif' }}>
          Date: {new Date(image.createdAt).toLocaleDateString()}
        </Typography>
      </Box>
    </Box>
  </Modal>
);

export default ImageDetailsModal;
