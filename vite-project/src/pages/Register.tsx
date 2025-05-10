// src/pages/register/Register.tsx
import React, { useState } from "react";
import { register } from "../pages/services/auth.service";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = await register(name, email, password);
      console.log("Usuario registrado:", newUser);
      setSuccess("Registro exitoso");
      setError("");
    } catch (err) {
      setError("Error al registrar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Cuenta</h2>
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit">Registrarse</button>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
