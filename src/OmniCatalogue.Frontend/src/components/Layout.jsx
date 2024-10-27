import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ isLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen bg-mainBg">
      <Header isLoggedIn={isLoggedIn} />
      <main className="flex-grow pt-20 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
