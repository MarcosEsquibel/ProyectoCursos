import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../pages/components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Talleres from "../pages/Talleres";
import Cursos from "../pages/Cursos";
import Formaciones from "../pages/Formaciones"
import comprapage from "../pages/Comprapage"
import Footer from "../pages/components/Footer";

   function AppRouter() {
  return (
    <Router>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/formaciones" element={<Formaciones />} />

      </Routes>
    </Router>
  );
}
export default AppRouter