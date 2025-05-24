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
      {/* Logo */}
      <div className="logo-container">
        <img src={NoimaLab} alt="Logo NoimaLab" className="NoimaLab" />
      </div>

      {/* Botón hamburguesa visible solo en móvil */}
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

        {/* Botón de sesión en móvil */}
        {hasPurchased && (
          <div className="user-access mobile-only">
            <button className="access-button" onClick={handleButtonClick}>
              {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
          </div>
        )}
      </nav>

      {/* Botón de sesión en escritorio */}
      {hasPurchased && (
        <div className="user-access desktop-only">
          <button className="access-button" onClick={handleButtonClick}>
            {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
