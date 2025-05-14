// Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <h1 className="logo">NoimaLab</h1>
        <p className="sub-logo">by Kavurey Group</p>
      </div>

      {/* Botón hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú de navegación */}
      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/talleres" onClick={closeMenu}>Talleres</Link></li>
          <li><Link to="/cursos" onClick={closeMenu}>Cursos</Link></li>
          <li><Link to="/formaciones" onClick={closeMenu}>Formaciones</Link></li>
        </ul>
      </nav>

      {/* Botón acceso */}
      <div className="user-access">
        <Link to="/login" className="access-button" onClick={closeMenu}>
          Iniciar sesión
        </Link>
      </div>
    </header>
  );
};

export default Header;
