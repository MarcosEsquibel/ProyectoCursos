import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="noima-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-name">NoimaLab</h2>
          <p className="footer-tagline">Emotional Culture & Team Dynamics</p>
        </div>

        <div className="footer-nav">
          <Link to="/">Inicio</Link>
          <Link to="/talleres">Talleres</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/formaciones">Formaciones</Link>
        </div>

        <div className="footer-contact">
          <p>Contacto: <a href="mailto:info@noimalab.com">info@noimalab.com</a></p>
          <div className="footer-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-copy">
          <p>© {new Date().getFullYear()} NoimaLab. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
