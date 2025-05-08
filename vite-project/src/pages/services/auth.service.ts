// src/services/auth.service.ts
import { userAdapter } from "../adapters/user.adapter";

export async function login(email: string, password: string) {
  const credentials = { email, password };

  return fetch("/login", {
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

  return fetch("/register", {
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
