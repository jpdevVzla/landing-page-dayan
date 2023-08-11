import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import images from '../exports/images'; 
import Slider from '../Components/slider'
import '../styles/styles.css'; 
import Panon from './Panon';

const GaleriaImag = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
    document.body.classList.add('dark');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.classList.remove('dark');
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const imageItems = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  

  return (
    
    <div className={`galeria-container ${isDarkMode ? 'dark' : ''}`}>
      {imageItems.map((item, index) => ( 
        <div className='galeria-item' key={index}>
          <img
            src={item.thumbnail}
            alt={`Image ${index}`}
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Imagen en pantalla completa'
        className='modal'
        overlayClassName='overlay'
      >
        <FaArrowLeft className='arrow left-arrow' onClick={prevImage} />
        <img
          src={images[selectedImageIndex]}
          alt={`Image ${selectedImageIndex}`}
          className='modal-image'
        />
        <FaArrowRight className='arrow right-arrow' onClick={nextImage} />
        <FaTimes className='close-icon' onClick={closeModal} />
      </Modal>
      <Slider/>
      
    </div>
    
    
  );
};

export default GaleriaImag;
