import React from 'react';
import { Button } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Paginainicio = () => {
  return (
  <div>
    <Header />
    <div className='bg-stone-300 min-h-screen'>
      <main>
        <div className=''>
          <h1 className='text-sky-500 mb-5'>Landing Page de la mejor esposa existente</h1>
          <Button  variant="contained" color="primary">
            Botón de Material-UI
          </Button>
        </div>
      </main>
    </div>
    <Footer />
  </div>
  );
};

export default Paginainicio;
