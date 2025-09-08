import React, { createContext, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ value, children }) => (
  <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
);

export const useGlobal = () => useContext(GlobalContext);
