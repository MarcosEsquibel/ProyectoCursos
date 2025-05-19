import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NoimaLab from "../../assets/images/NoimaLab.png"; // Asegúrate de que esta ruta sea correcta
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-container">
        <img src={NoimaLab} alt="NoimaLab Logo" className="logo-large" />
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/talleres">Talleres</Link></li>
          <li><Link to="/cursos">Cursos</Link></li>
          <li><Link to="/formaciones">Formaciones</Link></li>
        </ul>
      </nav>

      <button className="buy-button" onClick={() => navigate("/comprar")}>
        Comprar
      </button>
    </header>
  );
};

export default Header;
