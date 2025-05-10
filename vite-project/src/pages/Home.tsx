import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Asegúrate de tener este archivo de estilos

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle del estado del menú (abrir/cerrar)
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="home-container">
      {/* Menú de navegación */}
      <nav className="sidebar">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú que solo se muestra cuando `menuOpen` es true */}
        {menuOpen && (
          <ul>
            <li><Link to="/" className="link">Inicio</Link></li>
            <li><Link to="/talleres" className="link">Talleres</Link></li>
            <li><Link to="/cursos" className="link">Cursos</Link></li>
            <li><Link to="/formaciones" className="link">Formaciones</Link></li>
            <li><Link to="/colabora" className="link">Colabora</Link></li>
            <li><Link to="/sobre" className="link">Sobre mí / Proyecto</Link></li>
            <li><Link to="/blog" className="link">Blog / Recursos gratuitos</Link></li>
            <li><Link to="/soporte" className="link">Soporte</Link></li>
          </ul>
        )}
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
       
        {/* Bienvenida */}
        <div className="welcome">
          <h2>Bienvenidos</h2>
          <p>¡Explora nuestros productos y mucho más!</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
