// components/Header.tsx
import React from "react";
import "./Header.css";

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <header className="header">
      <button className="hamburger" onClick={toggleMenu}>☰</button>
      <h1>Kavurey Group - Plataforma de Formaciones Online</h1>
    </header>
  );
};

export default Header;
