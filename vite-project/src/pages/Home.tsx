// pages/Home.tsx
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-content">
      <h2>Continúa justo donde lo dejaste</h2>
      <button className="continue-btn">Continuar aprendizaje</button>
      <p>REACTJS Clase 07 - useEffect y ciclos de vida</p>
      <div className="card">
        <h3>Máster en Desarrollo Web Full Stack</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: "42%" }}></div>
        </div>
        <p>42% completado</p>
      </div>
    </div>
  );
};

export default Home;
