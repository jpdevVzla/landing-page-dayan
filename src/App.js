import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Paginainicio from './Components/Paginainicio';
import "../src/index.css";
import { ThemeProvider } from './Components/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Paginainicio />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
