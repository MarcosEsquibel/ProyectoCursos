import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-content">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Formaciones a tu ritmo<br />para quienes quieren transformar desde dentro.
        </h1>
        <Link to="/formaciones" className="hero-button">Ver formaciones</Link>
      </section>

      {/* Cursos destacados */}
      <section className="courses-section">
        <div className="course-card">
          <img src="/ruta/imagen1.jpg" alt="Curso de Regulación Emocional" />
          <h3>Curso de Regulación Emocional</h3>
          <Link to="/cursos/regulacion" className="card-btn">Ver más</Link>
        </div>
        <div className="course-card">
          <img src="/ruta/imagen2.jpg" alt="Taller de Mindfulness" />
          <h3>Taller de Mindfulness</h3>
          <Link to="/talleres/mindfulness" className="card-btn">Ver más</Link>
        </div>
        <div className="course-card">
          <img src="/ruta/imagen3.jpg" alt="Formación en Psicología Positiva" />
          <h3>Formación en Psicología Positiva</h3>
          <Link to="/formaciones/psicologia-positiva" className="card-btn">Ver más</Link>
        </div>
      </section>

      {/* Qué es NoimaLab */}
      <section className="about-section">
        <h2>Qué es NoimaLab</h2>
        <p>
          NoimaLab es un espacio online de formación emocional, psicológica y vivencial.
          <br />Sin tutorías. Sin horarios. Solo tú, tus procesos y tu tiempo.
        </p>
        <img src="/ruta/ilustracion.png" alt="Ilustración" />
      </section>

      {/* Explora según necesidad */}
      <section className="explore-section">
        <h2>Explora según tu necesidad</h2>
        <div className="explore-options">
          <div className="option">
            <span>📄</span>
            <h4>Talleres cortos</h4>
            <Link to="/talleres">Ver talleres</Link>
          </div>
          <div className="option">
            <span>📘</span>
            <h4>Cursos para profundizar</h4>
            <Link to="/cursos">Ver cursos</Link>
          </div>
          <div className="option">
            <span>📚</span>
            <h4>Formaciones completas</h4>
            <Link to="/formaciones">Ver formaciones</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
