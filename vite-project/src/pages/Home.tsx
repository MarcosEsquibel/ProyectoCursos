import React from "react";
import { MdAssignment, MdLibraryBooks, MdSchool } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Home.css";
import psicologiapositiva2 from "../assets/images/psicologiapositiva2.png";
import Logo from "../assets/images/Logo.png"
const Home: React.FC = () => {
  function setDropdownOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="home-content">
      {/* Qué es NoimaLab - Sección inicial */}
      <section className="about-section">
        <h2>¿Qué es NoimaLab?</h2>
        <div className="about-content">
          <p>
            NoimaLab es un espacio online para quienes quieren transformar su vida desde dentro. Aquí te formas emocional, psicológica y vivencialmente, sin horarios ni tutorías. Tú marcas el ritmo, tú eliges el camino.
          </p>
          <img
            src={psicologiapositiva2}
            alt="Ilustración de NoimaLab"
            className="about-image"
          />
        </div>
      </section>

      {/* Explora sección */}
      <section className="explore-section">
        <h2>Explora según tu necesidad</h2>
        <div className="explore-options">
            <img 
            src={Logo}
            alt="Ilustración de NoimaLab"
            className="about-image"
          />
          <div className="option-card">
            <MdAssignment size={40} color="#fa8072" />
            <h4>Talleres breves</h4>
            <p>Acciones concretas para necesidades inmediatas.</p>
            <Link to="/talleres">Ver talleres</Link>
          </div>
          <div className="option-card">
            <MdLibraryBooks size={40} color="#fa8072" />
            <h4>Cursos para profundizar</h4>
            <p>Aprende y aplica con base teórica y ejercicios prácticos.</p>
            <Link to="/cursos">Ver cursos</Link>
          </div>
          <div className="option-card">
            <MdSchool size={40} color="#fa8072" />
            <h4>Formaciones completas</h4>
            <p>Programas diseñados para transformar de raíz.</p>
            <Link to="/formaciones">Ver formaciones</Link>
          </div>
        </div>
      </section>

      {/* Frase final inspiradora */}
      <section className="closing-phrase">
        <h3>
          'Entender nuestro interior no es opcional, es esencial'
        </h3>
      </section>

      {/* Footer */}
      <footer>
        <p>Únete a NoimaLab y empieza tu propio camino</p>
        <Link to="/register" className="hero-button">
          Empezar ahora
        </Link>
        
      </footer>
    </div>
  );
};

export default Home;


          