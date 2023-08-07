import React from 'react';
import { useTheme } from './ThemeContext';
import '../styles/styles.css';
import ifb from '../icons/facebook.png'
import itw from '../icons/twitter.png'
import icitg from '../icons/instagram.png'
import ld from '../icons/D2.png'

const Aside = () => {

  const { isDarkMode } = useTheme();

  return (
    <aside className={`bg-white w-60 p-16 h-screen fixed ${isDarkMode ? 'dark' : 'light'}`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&display=swap');

            .links {
            font-family: 'Pacifico', cursive;
          }
        `}
      </style>
      

      <div className="links">
        <a href="#" className="block mb-4">Portafolio</a>
        <a href="#" className="block mb-4">Blog</a>
        <div className="contact-container">
          <a href="#" className="block mb-4">Contacto</a>
          <img src={ld} alt="Logo D" className="logo-d" />
        </div>
        
      </div>
      <div className="social-icons mt-16 flex ">
        <div className="social-icon">
          <img src={ifb} alt="Facebook" />
        </div>
        <div className="social-icon">
          <img src={itw} alt="Twitter" />
        </div>
        <div className="social-icon">
          <img src={icitg} alt="Instagram" />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
