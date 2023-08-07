// Paginainicio.js
import React from 'react';
//import { Button } from '@mui/material';
import Header from './Header';
//import Footer from './Footer';
import Slider from './slider';
import Slider2 from './slider2';
import Aside from './Aside';
import Darkmode from './Darkmode';
import { useTheme } from './ThemeContext'; // Agregar esta línea

const Paginainicio = () => {
  const { isDarkMode } = useTheme(); // Obtener el estado del tema

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <Darkmode />
            <div className='bg-white min-h-screen'>
        <main className="main">
          <Aside className="aside" />
          <div className="w-3/4 flex flex-col">
            <Slider className="" />
            <Slider2 className="" />
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Paginainicio;
