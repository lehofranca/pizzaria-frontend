// src/components/HomePage.js
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import pizzaSprites from "../assets/pizzaSprites";
import "./HomePage.css";

const HomePage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="homepage">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#0d0d0d" } },
          particles: {
            number: { value: 10, density: { enable: true, area: 800 } },
            shape: { type: "image", image: pizzaSprites },
            size: {
              value: 32,
              random: { enable: true, minimumValue: 24 },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
            },
            opacity: { value: 1 },
          },
          detectRetina: true,
        }}
      />

      <h1 className="title">Bem-vindo ao Universo da Pizzaria</h1>

      <div className="call-to-action">
        <h2>Peça sua pizza favorita agora!</h2>
        <button className="btn-peca-agora">Peça Agora</button>
      </div>
    </div>
  );
};

export default HomePage;
