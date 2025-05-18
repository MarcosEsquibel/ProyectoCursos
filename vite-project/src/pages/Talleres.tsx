// src/pages/Talleres.tsx
import React from "react";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Talleres.css";

const Talleres: React.FC = () => {
  return (
    <div className="talleres-content">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Conecta contigo mismo</h1>
        <p className="hero-subtitle">
          Explora talleres diseñados para tu bienestar emocional y desarrollo personal.
        </p>
      </section>

      {/* Explora sección */}
      <section className="explore-section">
        <h2>Descubre lo que necesitas hoy</h2>
        <div className="explore-options">

          <div className="option-card">
            <MdAssignment size={40} color="#fa8072" />
            <h4>Talleres de Mindfulness</h4>
            <p>Descubre quién eres, fortalece tu autoestima y encuentra claridad interior.</p>
            <Link to="/talleres/autoconocimiento">Explorar</Link>
            <Link to="/comprar" className="buy-link">Comprar</Link>
          </div>

          <div className="option-card">
            <MdAssignment size={40} color="#fa8072" />
            <h4>Talleres regulación emocional</h4>
            <p>Aprende a calmar tu mente y a tomar el control de tus emociones.</p>
            <Link to="/talleres/ansiedad">Ver más</Link>
            <Link to="/comprar" className="buy-link">Comprar</Link>
          </div>

          <div className="option-card">
            <MdAssignment size={40} color="#fa8072" />
            <h4>Talleres de psicológia positiva</h4>
            <p>La mente positiva no solo es posible, es un camino. Te enseñamos cómo recorrerlo con herramientas y prácticas efectivas.</p>
            <Link to="/talleres/relaciones">Empezar</Link>
            <Link to="/comprar" className="buy-link">Comprar</Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Talleres;
