import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5106/api',
  timeout: 90000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const generateImage = async ({ prompt, tags, bookName }) => {
  const response = await api.post(
    '/Images/generate',
    { prompt, tags, bookName },
    { timeout: 60000 }
  );
  return response.data;
};

export const fetchGalleryImages = async () => {
  const response = await api.get('/Images/gallery');
  return response.data;
};

export const fetchMyImages = async () => {
  const response = await api.get('/Images/my-images');
  return response.data;
};

export default api;
