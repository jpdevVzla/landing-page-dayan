import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../styles/styles.css'
import i7 from '../assets/7.jpg'

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    // Validación de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(emailValue));
  };
  

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div>
          <img
            src={i7}
            alt="Imagen"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        
          <Typography variant="h6" gutterBottom>
            Contáctanos
          </Typography>
          <form>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              
            />
            <TextField
              label="Apellidos"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? 'Correo electrónico inválido' : ''}
          />
            <TextField
              label="Dirección"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Mensaje"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={6}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </form>
        
      </Grid>
    </Grid>
  );
};

export default Contacto;
