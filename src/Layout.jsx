import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { NavbarProvider } from './Components/context';
import Navbar from './Components/Navbar/Navbar';
import Navbarcom from './Components/Navbar/Navbarcom';

const Layout = () => {
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <Navbarcom/>
        <Outlet />
        <Footer />
      </NavbarProvider>
    </>
  );
};

export default Layout;
