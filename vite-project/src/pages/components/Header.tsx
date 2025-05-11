// components/Header.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <h1 className="logo">Kavurey Group - Plataforma de Formaciones Online</h1>

      {/* Menú de acceso al usuario */}
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

