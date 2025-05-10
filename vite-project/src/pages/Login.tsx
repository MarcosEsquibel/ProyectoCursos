// src/pages/login/Login.tsx
import React, { useState } from "react";
import { login } from "../pages/services/auth.service";
import "./Login.css";




export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      console.log("Logged in:", user);
      setError("");
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
