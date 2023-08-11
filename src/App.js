import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Paginainicio from './Pages/Paginainicio';
import Header from './Components/Header';
import "../src/index.css";
import { ThemeProvider } from './Components/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Paginainicio />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
