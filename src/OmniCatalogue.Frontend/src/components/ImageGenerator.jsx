import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateImage } from '../services/api';
import { Box, Typography, TextField, Button } from '@mui/material';

const ImageGenerator = () => {
  const { register, handleSubmit, reset } = useForm();
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const tagsArray = data.tags.split(',').map((tag) => tag.trim());
      const image = await generateImage({ prompt: data.prompt, tags: tagsArray, bookName: data.bookName });
      setGeneratedImage(image);
    } catch (err) {
      if (err.code === 'ECONNABORTED') {
        setError('Image generation timed out. Please try again or check your connection.');
      } else {
        setError('Failed to generate image. Please try again.');
      }
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <Box className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto mt-10" sx={{ fontFamily: 'Rockwell, serif' }}>
      
      <Box className="md:w-2/5 w-full p-6 bg-accent text-white rounded-lg shadow-lg">
        <Typography variant="h4" sx={{ mb: 4, color: 'white', fontFamily: 'Rockwell, serif' }}>
          Generate Image
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ mb: 1, fontFamily: 'Rockwell, serif' }}>Prompt</Typography>
            <TextField
              fullWidth
              {...register("prompt", { required: true })}
              placeholder="Enter image prompt"
              variant="outlined"
              sx={{ backgroundColor: 'white', borderRadius: '5px', fontFamily: 'Rockwell, serif' }}
              slotProps={{
                input: {
                  style: { color: '#654236', fontFamily: 'Rockwell, serif' },
                },
              }}
            />
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ mb: 1, fontFamily: 'Rockwell, serif' }}>Tags (comma-separated)</Typography>
            <TextField
              fullWidth
              {...register("tags", { required: true })}
              placeholder="Enter tags"
              variant="outlined"
              sx={{ backgroundColor: 'white', borderRadius: '5px', fontFamily: 'Rockwell, serif' }}
              slotProps={{
                input: {
                  style: { color: '#654236', fontFamily: 'Rockwell, serif' },
                },
              }}
            />
          </Box>
          
          <Box sx={{ mb: 6 }}>
            <Typography variant="body1" sx={{ mb: 1, fontFamily: 'Rockwell, serif' }}>Book Name</Typography>
            <TextField
              fullWidth
              {...register("bookName", { required: true })}
              placeholder="Enter book name"
              variant="outlined"
              sx={{ backgroundColor: 'white', borderRadius: '5px', fontFamily: 'Rockwell, serif' }}
              slotProps={{
                input: {
                  style: { color: '#654236', fontFamily: 'Rockwell, serif' },
                },
              }}
            />
          </Box>
          
          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: 'white',
              color: '#654236',
              fontWeight: 'bold',
              fontFamily: 'Rockwell, serif',
              '&:hover': {
                backgroundColor: '#e5d3c3',
              },
            }}
          >
            Generate Image
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 4, fontFamily: 'Rockwell, serif' }}>
              {error}
            </Typography>
          )}
        </form>
      </Box>
      
      <Box className="md:w-3/5 w-full flex justify-center items-center p-6 bg-accent rounded-lg shadow-lg h-96">
        {loading ? (
          <Box className="flex justify-center items-center">
            <Box className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></Box>
          </Box>
        ) : generatedImage ? (
          <img
            src={generatedImage.imageUrl}
            alt="Generated"
            className="max-w-full max-h-full rounded-md shadow-md"
          />
        ) : (
          <Typography sx={{ color: 'white', fontSize: '1.25rem', fontFamily: 'Rockwell, serif' }}>
            Image will appear here after generation.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ImageGenerator;
