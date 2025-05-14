import React from "react";
import { MdPsychology } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Cursos.css"; // Puedes crear un archivo CSS similar al de Talleres
import Logo from "../assets/images/Logo.png"
const Cursos: React.FC = () => {
  return (
    <div className="cursos-content">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Descubre cursos de psicología que transforman tu vida
        </h1>
        <p className="hero-subtitle">
          Aprende a tu ritmo, crece con propósito. Tu bienestar mental comienza aquí.
        </p>
      </section>

      {/* Explora sección */}
      <section className="explore-section">
        <h2>Explora según tu interés</h2>
        <div className="explore-options">
             <img 
            src={Logo}
            alt="Ilustración de NoimaLab"
            className="about-image"
          />
          <div className="option-card">
            <MdPsychology size={40} color="#6a5acd" />
            <h4>Cursos de Psicología</h4>
            <Link to="/cursos">Ver cursos</Link>
          </div>
        </div>
      </section>
    </div>
  );
  
};


export default Cursos;
