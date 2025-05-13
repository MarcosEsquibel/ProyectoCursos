// Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

type HeaderProps = {
  toggleMenu: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <h1 className="logo">NoimaLab</h1>
        <p className="sub-logo">by Kavurey Group</p>
      </div>

      {/* Navegación */}
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/talleres">Talleres</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/formaciones">Formaciones</Link></li>
        </ul>
      </nav>

      {/* Acceso directo a login */}
      <div className="user-access">
        <Link to="/login" className="access-button">
          Iniciar sesión
        </Link>
      </div>
    </header>
  );
};

export default Header;
