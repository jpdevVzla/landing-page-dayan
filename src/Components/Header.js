import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  const [isSubMenuProductoOpen, setIsSubMenuProductoOpen] = useState(false);
  const [isSubMenuContactoOpen, setIsSubMenuContactoOpen] = useState(false);

  // Función para abrir o cerrar el submenú de "Productos"
  const toggleSubMenuProducto = () => {
    setIsSubMenuProductoOpen((prevState) => !prevState);
  };

  // Función para abrir o cerrar el submenú de "Contacto"
  const toggleSubMenuContacto = () => {
    setIsSubMenuContactoOpen((prevState) => !prevState);
  };

  // Función para cerrar ambos submenús al hacer clic en un enlace del submenú
  const closeSubMenus = () => {
    setIsSubMenuProductoOpen(false);
    setIsSubMenuContactoOpen(false);
  };

  return (
    
    <header className={`header ${isSubMenuProductoOpen || isSubMenuContactoOpen ? 'transparent' : ''}`}>
      <nav className="main-menu">
        <NavLink to="/" className="menu-link">
          Inicio
        </NavLink>
        <div className="menu-link" onClick={toggleSubMenuProducto} onMouseLeave={closeSubMenus}>
          Productos
          {isSubMenuProductoOpen && (
            <div className="sub-menu-vertical">
              
              <div className="submenu-link" onClick={closeSubMenus}>
                Producto 1
              </div>
              <div className="submenu-link" onClick={closeSubMenus}>
                Producto 2
              </div>
            </div>
          )}
        </div>
        {/* Agrega los eventos onClick para "Contacto" y su submenú */}
        <div className="menu-link" onClick={toggleSubMenuContacto} onMouseLeave={closeSubMenus}>
          Contacto
          {isSubMenuContactoOpen && (
            <div className="sub-menu-vertical">
              {/* Agrega las opciones del submenú de "Contacto" */}
              <div className="submenu-link" onClick={closeSubMenus}>
                Opción 1
              </div>
              <div className="submenu-link" onClick={closeSubMenus}>
                Opción 2
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
    
  );
};

export default Header;
