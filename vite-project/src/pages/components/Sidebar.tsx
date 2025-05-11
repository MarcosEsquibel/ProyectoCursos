// components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {
  menuOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ menuOpen }) => {
  return (
    <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/talleres">Talleres</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/formaciones">Formaciones</Link></li>
        <li><Link to="/colabora">Colabora</Link></li>
        <li><Link to="/sobre">Sobre mí</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/soporte">Soporte</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
