// App.js
import React from 'react';
import AppRouter from './AppRouter';
import { DataProvider } from './DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <AppRouter />
      </div>
    </DataProvider>
  );
}

export default App;
