// src/pages/CompraPage.tsx
import React, { useState } from "react";

const CompraPage: React.FC = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleStartPurchase = () => {
    setShowPaymentForm(true);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Compra tu Curso</h1>
      <p>Accede al contenido completo registrándote luego de tu compra.</p>

      {!showPaymentForm ? (
        <button
          onClick={handleStartPurchase}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          Comprar ahora
        </button>
      ) : 
      // Aquí falta cerrar o mostrar algo cuando showPaymentForm es true
      null
      }
    </div>
  );
};

export default CompraPage;
