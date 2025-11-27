// src/services/auth.service.ts

import { userAdapter } from "../adapters/user.adapter";

const API_URL = "http://localhost:8080"; // ⬅ tu backend

export async function login(email: string, password: string) {
  const credentials = { email, password };

  return fetch(`${API_URL}//api/auth/login`, {      // ⬅ CAMBIO AQUÍ
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Login failed");
      return response.json();
    })
    .then((data) => userAdapter(data, false));
}

export async function register(name: string, email: string, password: string) {
  const user = { name, email, password };
  const adaptedUser = userAdapter(user, true);

  return fetch(`${API_URL}/api/auth/register`, {   // ⬅ CAMBIO AQUÍ
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(adaptedUser),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Register failed");
      return response.json();
    })
    .then((data) => userAdapter(data, false));
}
