import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Close } from '@mui/icons-material';

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-blue-700 text-white shadow-md fixed top-0 z-10">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-8 py-4">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="hover:text-blue-300">OmniCatalogue</Link>
        </h1>
        
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isMenuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>

        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-blue-700 md:bg-transparent py-4 md:py-0 z-20`}
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-blue-300">
            Home
          </Link>
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-blue-300">
            Gallery
          </Link>
          <Link to="/generate" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-blue-300">
            Generate Image
          </Link>
          <Link to="/my-images" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-blue-300">
            My Images
          </Link>

          {!isLoggedIn ? (
            <button
              onClick={() => {
                navigate('/login');
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 text-gray-800 font-semibold rounded-lg bg-white hover:bg-gray-100 hover:text-gray-900 border border-gray-300"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
