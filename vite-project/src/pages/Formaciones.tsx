import React from "react";
import { MdPsychology } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Formaciones.css";

const Formaciones: React.FC = () => {
  return (
    <div className="formaciones-content">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Formaciones que transforman desde dentro
        </h1>
        <p className="hero-subtitle">
          Espacios profundos para aprender, sanar y crecer con propósito.
        </p>
      </section>

      {/* Explora sección */}
      <section className="explore-section">
        <h2>Explora nuestras Formaciones</h2>
        <div className="explore-options">
          <div className="option-card">
            <MdPsychology size={40} color="#6a5acd" />
            <h4>Autoconocimiento y Gestión Emocional</h4>
            <p>"Conócete a ti mism@ y aprende a regular tus emociones con conciencia."</p>
            <Link to="/formaciones/autoconocimiento">Explorar</Link>
          </div>

          <div className="option-card">
            <MdPsychology size={40} color="#6a5acd" />
            <h4>Psicología del Trauma</h4>
            <p>"Comprende las heridas del pasado para sanar el presente."</p>
            <Link to="/formaciones/trauma">Explorar</Link>
          </div>

          <div className="option-card">
            <MdPsychology size={40} color="#6a5acd" />
            <h4>Mindfulness y Bienestar</h4>
            <p>"Encuentra calma y claridad a través del momento presente."</p>
            <Link to="/formaciones/mindfulness">Explorar</Link>
          </div>

          <div className="option-card">
            <MdPsychology size={40} color="#6a5acd" />
            <h4>Psicología Positiva</h4>
            <p>"Cultiva fortalezas y crea una vida con más significado."</p>
            <Link to="/formaciones/positiva">Explorar</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formaciones;
