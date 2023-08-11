import React from 'react'
import { ThemeProvider } from '../Components/ThemeContext';
import GaleriaImag from '../Components/GaleriaImag'


const Portafolio = () => {
  return (
    <>
    <ThemeProvider>
    <GaleriaImag />
    </ThemeProvider>
    
    </>
  )
}

export default Portafolio