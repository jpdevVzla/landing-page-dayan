// Paginainicio.js
import React from 'react';
import Portafolio from './Portafolio';
import Blog from './Blog';
import Contacto from './Contacto';
import Darkmode from '../Components/Darkmode';
import Panon from '../Components/Panon';
import NoticiasAPI from '../Components/NoticiasAPI'; 
import { Routes, Route } from 'react-router-dom';

const Paginainicio = () => {
  return (
    <div className='bg-white min-h-screen'>
      <Darkmode />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <NoticiasAPI /> {/* Use the integrated component */}
    </div>
  );
};

const Inicio = () => {
  return (
    <>
      <Panon />
      <main className="main"></main>
    </>
  );
};

export default Paginainicio;
