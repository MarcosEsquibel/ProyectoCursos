// src/pages/services/auth.service.ts
import { userAdapter } from "../adapters/user.adapter";

// ❌ ELIMINA ESTA LÍNEA
// const API_URL = "http://localhost:8080";

export async function login(email: string, password: string) {
  const credentials = { email, password };

  return fetch("/api/auth/login", {   // ✅ SOLO /api
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

export async function register(
  name: string,
  email: string,
  password: string
) {
  const user = { name, email, password };
  const adaptedUser = userAdapter(user, true);

  return fetch("/api/auth/register", {   // ✅ SOLO /api
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
