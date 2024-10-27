import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import GeneratorPage from './pages/GeneratorPage';
import MyImagesPage from './pages/MyImagesPage';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  return (
    <Router>
      <Routes>
        <Route element={<Layout isLoggedIn={!!token} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/generate" element={<GeneratorPage />} />
          <Route path="/my-images" element={<MyImagesPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
