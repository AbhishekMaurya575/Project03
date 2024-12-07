import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbardisplay, setNavbardisplay] = useState("none");

  return (
    <NavbarContext.Provider value={{ navbardisplay, setNavbardisplay }}>
      {children}
    </NavbarContext.Provider>
  );
};
