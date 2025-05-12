// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/components/Header";
import Sidebar from "./pages/components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Importamos Login
import Register from "./pages/Register"; // Importamos Register
import "./utilities/App.css";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="app-container">
        <Header toggleMenu={toggleMenu} />
        <Sidebar menuOpen={menuOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
            <Route path="/register" element={<Register />} /> {/* Ruta para Register */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
