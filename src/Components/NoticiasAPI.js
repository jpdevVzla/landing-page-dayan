// NoticiasAPI.js
import React from 'react';
import { Container } from '@mui/material';
import { NoticiasProvider } from '../context/NoticiasProvider';
import ListadoNoticias from './ListadoNoticias';
import Formulario from './Formulario';

const NoticiasAPI = () => {
  return (
    <NoticiasProvider>
      <Container>
        {/* Your component JSX */}
        <Formulario />
        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  );
};

export default NoticiasAPI;
