// Slider.jsx
import React, { useState } from 'react';
import '../styles/slider.css';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import images from '../exports/images';

const Slider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const { isDarkMode } = useTheme();

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleImageClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <motion.div className={`slider-container ${isDarkMode ? 'dark' : 'light'}`}>
      <motion.div className='slider' drag='x' dragConstraints={{ right: 300, left: -4600 }}>
        {images.map((image, index) => (
          <motion.div
            className={`item ${hoveredIndex === index ? 'hovered' : ''} ${clickedIndex === index ? 'clicked' : ''}`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Image ${index}`} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    
  );
};

export default Slider;
