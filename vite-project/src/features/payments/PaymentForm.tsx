// src/pages/PaymentForm.tsx
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentForm.css"

// Tu clave pública de Stripe (test)
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXXXX");

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    // Aquí se crea el método de pago con los datos de la tarjeta
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Elemento de tarjeta no disponible");
      setLoading(false);
      return;
    }

    const {error: createError, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (createError) {
      setError(createError.message ?? "Error en método de pago");
      setLoading(false);
      return;
    }

    // En un flujo real, enviarías paymentMethod.id a tu backend para crear el pago
    console.log("PaymentMethod creado:", paymentMethod);

    // Simulamos éxito para ejemplo:
    setSuccess(true);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: 400, margin: "auto"}}>
      <h2>Paga tu curso</h2>
      <CardElement options={{hidePostalCode: true}} />
      {error && <div style={{color: "red", marginTop: 10}}>{error}</div>}
      {success ? (
        <div style={{color: "green", marginTop: 10}}>Pago exitoso! Gracias.</div>
      ) : (
        <button type="submit" disabled={!stripe || loading} style={{marginTop: 20}}>
          {loading ? "Procesando..." : "Pagar"}
        </button>
      )}
    </form>
  );
};

const PaymentForm: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentForm;
