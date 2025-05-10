import React, { useState } from 'react'; 
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? <Login /> : <Register />}
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Ir a Registro' : 'Ir a Login'}
      </button>
    </div>
  );
}
