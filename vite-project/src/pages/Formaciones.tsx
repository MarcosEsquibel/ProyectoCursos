import React from "react";
import { MdPsychology, MdSchool } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Formaciones.css";

const Formaciones: React.FC = () => {
  return (
    <div className="formaciones-content">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Formaciones completas en psicología transformadora
        </h1>
        <p className="hero-subtitle">
          Recorridos profundos diseñados para quienes quieren comprenderse, sanar y acompañar a otros.
        </p>
      </section>

      {/* Explora Formaciones */}
      <section className="explore-section">
        <h2>Elige tu camino de formación</h2>
        <div className="explore-options">
          <div className="option-card">
            <MdPsychology size={40} color="#fa8072" />
            <h4>Psicología del Bienestar</h4>
            <p>Una formación integral para cultivar el equilibrio emocional y mental.</p>
            <Link to="/formaciones/psicologia-bienestar">Ver formación</Link>
          </div>

          <div className="option-card">
            <MdSchool size={40} color="#fa8072" />
            <h4>Autoconocimiento profundo</h4>
            <p>Explora tus patrones, emociones y fortalezas para liderar tu vida con claridad.</p>
            <Link to="/formaciones/autoconocimiento">Ver formación</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formaciones;
