// components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo y sub-logo */}
      <div className="logo-container">
        <h1 className="logo">NoimaLab</h1>
        <p className="sub-logo">by Kavurey Group</p>
      </div>

      {/* Menú de navegación */}
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/talleres">Talleres</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/formaciones">Formaciones</Link></li>
        </ul>
      </nav>

      {/* Acceso al usuario */}
      <div
        className="user-access"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button className="access-button">Acceso al usuario ▾</button>
        {dropdownOpen && (
          <div className="access-dropdown">
            <Link to="/login" onClick={() => setDropdownOpen(false)}>
              Iniciar sesión
            </Link>
            <Link to="/register" onClick={() => setDropdownOpen(false)}>
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
