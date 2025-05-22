// src/pages/components/Header.tsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import NoimaLab from "../../assets/images/NoimaLab.png"

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
      // Ha comprado pero no está logueado → ir a login
      navigate("/login");
    } else {
      // Está logueado → cerrar sesión
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      navigate("/");
    }
  };

  const getButtonText = () => {
    if (!isLoggedIn) return "Iniciar sesión";
    return "Cerrar sesión";
  };

  return (
    <header className="header">
      {/* Logo */}
      
      <div className="logo-container">
      <img 
            src={NoimaLab}
            alt="Ilustración de NoimaLab"
            className="NoimaLab"
          />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/talleres" onClick={closeMenu}>Talleres</Link></li>
          <li><Link to="/cursos" onClick={closeMenu}>Cursos</Link></li>
          <li><Link to="/formaciones" onClick={closeMenu}>Formaciones</Link></li>
        </ul>
      </nav>

      {hasPurchased && (
        <div className="user-access">
          <button
            className="access-button"
            onClick={handleButtonClick}
          >
            {getButtonText()}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
