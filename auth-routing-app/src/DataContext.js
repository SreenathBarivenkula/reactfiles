// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState('');

  const updateSharedData = (data) => {
    setSharedData(data);
  };

  return (
    <DataContext.Provider value={{ sharedData, updateSharedData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
