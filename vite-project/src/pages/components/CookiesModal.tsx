// src/pages/components/CookiesModal.tsx
import React, { useState, useEffect } from "react";
import "./CookiesModal.css";
import { Link } from "react-router-dom";

const CookiesModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesConsent");
    if (!consent) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const closeModal = (decision: "accepted" | "rejected") => {
    localStorage.setItem("cookiesConsent", decision);
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>🍪 Aviso de cookies</h3>
        <p>
          Utilizamos cookies para mejorar tu experiencia.
          Puedes aceptar o rechazar su uso. Más información en nuestra{" "}
          <Link to="/politica-cookies" className="cookie-link">Política de cookies</Link>.
        </p>
        <div className="modal-buttons">
          <button className="accept" onClick={() => closeModal("accepted")}>Aceptar</button>
          <button className="reject" onClick={() => closeModal("rejected")}>Rechazar</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
