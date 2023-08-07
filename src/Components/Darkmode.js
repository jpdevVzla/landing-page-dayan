// Darkmode.js
import React from 'react';
import { useTheme } from './ThemeContext';
import Switch from '@mui/material/Switch'; // Importa el componente Switch de Material-UI
import { FormControlLabel } from '@mui/material'; // Importa el componente FormControlLabel de Material-UI


const Darkmode = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className='p-2'>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
        label={isDarkMode ? 'Modo Noche ON' : 'Modo Noche OFF'}
      />
    </div>
  );
};


export default Darkmode;
