import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth'; // Import the login function from auth.js

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const token = await login(username, password);
      onLogin(token);
      navigate('/gallery');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box className="flex items-center justify-center min-h-[50vh] pt-10 pb-10">
      <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 3, p: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Login to OmniCatalogue
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <Typography color="error" variant="body2" align="center" className="mt-2">
                {error}
              </Typography>
            )}
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ mt: 2 }}
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
