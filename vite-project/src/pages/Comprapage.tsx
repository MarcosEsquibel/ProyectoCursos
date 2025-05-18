import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompraPage: React.FC = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const navigate = useNavigate();

  const handleStartPurchase = () => {
    setShowPaymentForm(true);
  };

  const handlePayment = () => {
    setIsPaying(true);

    // Simula procesamiento del pago
    setTimeout(() => {
      // Marcar como comprado
      localStorage.setItem("hasPurchased", "true");

      // Redirigir al registro
      navigate("/register");
    }, 2000); // Simula un "cargando" de 2 segundos
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
      ) : (
        <div style={{ marginTop: "2rem" }}>
          <h3>Formulario de pago</h3>
          <p>Simulación de pago con tarjeta...</p>

          <button
            onClick={handlePayment}
            disabled={isPaying}
            style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
          >
            {isPaying ? "Procesando..." : "Pagar"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CompraPage;
