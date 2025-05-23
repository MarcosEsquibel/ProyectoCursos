// src/pages/components/Header.tsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import NoimaLab from "../../assets/images/NoimaLab.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const purchaseStatus = localStorage.getItem("hasPurchased");
    setHasPurchased(purchaseStatus === "true");

    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleButtonClick = () => {
    closeMenu();
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      navigate("/");
    }
  };

  return (
    <header className="header">
      {/* Logo (clickable en móvil) */}
      <div
        className="logo-container"
        onClick={() => {
          if (window.innerWidth <= 768) toggleMenu();
        }}
      >
        <img
          src={NoimaLab}
          alt="Logo NoimaLab"
          className="NoimaLab"
        />
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

      {/* Botón de sesión */}
      {hasPurchased && (
        <div className="user-access">
          <button className="access-button" onClick={handleButtonClick}>
            {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
