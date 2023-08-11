import React from 'react'
import i8 from '../assets/8.jpg'
import i9 from '../assets/9.jpg'
import { useTheme } from '../Components/ThemeContext';


const Blog = () => {
    const { isDarkMode } = useTheme();

    return (
      <div className={`blog-container ${isDarkMode ? 'dark' : ''}`}>
        
        
        <div className="blog-item">
          <div className="blog-image left">
            <img src={i8} alt="Imagen 1" />
          </div>
          <div className="blog-content right">
            <h2>Sobre Mi</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              libero ac tincidunt euismod, justo justo convallis arcu, at iaculis orci ex quis nisl.
            </p>
          </div>
        </div>
        <div className="blog-item">
          <div className="blog-content left">
            <h2>Título de la Entrada</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              libero ac tincidunt euismod, justo justo convallis arcu, at iaculis orci ex quis nisl.
            </p>
          </div>
          <div className="blog-image right">
            <img src={i9} alt="Imagen 2" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Blog;