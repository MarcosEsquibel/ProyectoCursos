import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="noima-footer">
      <div className="footer-content">
        <div className="footer-brand">
               
                <p>Únete a NoimaLab y empieza tu propio camino: </p>
                <Link to="/register" className="hero-button">
                  Empezar ahora
                </Link>
                
              
        </div>

        

        <div className="footer-contact">
          <p>Contacto: <a href="mailto:info@noimalab.com">info@noimalab.com</a></p>
          <div className="footer-icons">
            <a href="https://www.instagram.com/noima.lab/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" className= "hidden" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="#" className= "hidden" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
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
