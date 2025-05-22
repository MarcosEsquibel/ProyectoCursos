// src/components/ProtectedRoute.tsx
import React, { JSX } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const hasPurchased = localStorage.getItem("hasPurchased") === "true";

  if (!hasPurchased) {
    alert("Primero debes comprar para acceder a esta página.");
    return <Navigate to="/comprar" replace />;
  }

  return children;
};

export default ProtectedRoute;
