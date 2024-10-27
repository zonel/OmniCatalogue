import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="w-full bg-accent text-white py-4 text-center shadow-md"
      style={{ fontFamily: '"Rockwell", serif' }}
    >
      <p className="text-sm">&copy; {new Date().getFullYear()} OmniCatalogue. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
