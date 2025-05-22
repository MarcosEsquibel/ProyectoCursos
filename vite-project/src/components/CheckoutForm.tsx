// src/components/CheckoutForm.tsx
import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/success',
      },
    });

    if (error) {
      setMessage(error.message || 'Ocurrió un error al procesar el pago.');
    } else {
      setMessage('Pago procesado correctamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Pagar</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default CheckoutForm;
