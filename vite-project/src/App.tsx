// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Importamos Login
import Register from "./pages/Register"; // Importamos Register
import "./utilities/App.css";
import Talleres from "./pages/Talleres";
import Cursos from "./pages/Cursos";
import Formaciones from "./pages/Formaciones";
import ProtectedRoute from "./components/ProtectedRoute";
import CompraPage from "./pages/Comprapage";
import Footer from "./pages/components/Footer";
import CookiesModal from "./pages/components/CookiesModal";
 
const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="app-container">
        <Header toggleMenu={toggleMenu} />
        <main className="main-content">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
            <Route path="/register" element={<Register />} /> {/* Ruta para Register */}
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/formaciones" element={<Formaciones />} />
            <Route path="/comprar" element={<CompraPage />} />



          </Routes>
        </main>
       <Footer/>
       <CookiesModal/>
      </div>
    </Router>
  );
};

export default App;
