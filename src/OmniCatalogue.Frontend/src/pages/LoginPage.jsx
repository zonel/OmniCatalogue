import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth';

const LoginPage = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setError('');
    try {
      const token = await login(data.username, data.password);
      onLogin(token);
      navigate('/gallery');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#F7EBDE',
        padding: '2rem',
      }}
    >
      <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 3, p: 4, backgroundColor: '#654236' }}>
        <CardContent>
          <Typography 
            variant="h5" 
            component="h1" 
            align="center" 
            gutterBottom 
            sx={{ fontFamily: 'Rockwell, serif', color: '#F7EBDE' }}
          >
            Login to OmniCatalogue
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              {...register('username', { required: 'Username is required' })}
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#F7EBDE' },
                  '& input': { color: '#333333' },
                  '&:hover fieldset': { borderColor: '#14281D' },
                },
                '& .MuiFormLabel-root': { color: '#333333' },
                '& .MuiFormHelperText-root': { color: '#F7EBDE' },
              }}
            />
            
            <TextField
              {...register('password', { required: 'Password is required' })}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#F7EBDE' },
                  '& input': { color: '#333333' },
                  '&:hover fieldset': { borderColor: '#14281D' },
                },
                '& .MuiFormLabel-root': { color: '#333333' },
                '& .MuiFormHelperText-root': { color: '#F7EBDE' },
              }}
            />
            
            {error && (
              <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth
              sx={{ 
                mt: 3, 
                backgroundColor: '#14281D', 
                color: '#F7EBDE', 
                '&:hover': { backgroundColor: '#654236' } 
              }}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
