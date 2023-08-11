//Header.js
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
        <div className="menu-link" onMouseEnter={toggleSubMenuProducto} onMouseLeave={closeSubMenus}>
          <NavLink to="/portafolio" className="submenu-link" onClick={closeSubMenus}>
            Portafolio
          </NavLink>
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
        <div className="menu-link" onMouseEnter={toggleSubMenuContacto} onMouseLeave={closeSubMenus}>
          <NavLink to="/blog" className="submenu-link" onClick={closeSubMenus}>
            Blog
          </NavLink>
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
        <div className="menu-link" onMouseEnter={toggleSubMenuContacto} onMouseLeave={closeSubMenus}>
          <NavLink to="/contacto" className="submenu-link" onClick={closeSubMenus}>
            Contacto
          </NavLink>
          {isSubMenuContactoOpen && (
            <div className="sub-menu-vertical">
              
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
