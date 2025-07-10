import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const TesteParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const pizzaTest = {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABUElEQVR4nO2bMRbDIAxDk541x8pd28kLhWDHgDDojyEPJKGwtBwHIWRnzpGLfa/rq333vO8h2rouYjFco1cgXSZtaTyldRBNJ+tpPKVVEE0mGWk8xRvExysAab7F+q4A0OYFj45X9ZnFeA7rJ2FuwMzmj8OuzxTA7OYFi073IRgddQBRdl/Q6lUFEM28oNFdDSCqeaGmn2fA02D03ReefLABpYFVdl8o+WEDcg9X230h54sNQAtAwwDSB6t+/0Lqjw1AC0DDANAC0DAAtAA0DAAtAA0DQAtA8xfAqH9moEj9sQFoAWgYQO7hqudAzhcbUBpYrQUlP2zA0+AqLXjywQbUXojegpp+VQOihqDRrf4EooWg1cszwPJylBZYdJobMHsIVn0uMzP9jPZ2Y1xnwCxt8OhwH4LoELzr88ZIi0lStr0zlLLtrbESM94bJGRzfoMWhGh8kpUPAAAAAElFTkSuQmCC",
    width: 32,
    height: 32,
  };

  return (
    <div style={{ height: "100vh", background: "#0d0d0d" }}>
      <Particles
        id="pizza-teste"
        init={particlesInit}
        options={{
          background: { color: { value: "#0d0d0d" } },
          particles: {
            number: { value: 8, density: { enable: true, area: 800 } },
            shape: {
              type: "image",
              image: pizzaTest,
            },
            size: {
              value: 38,
              random: { enable: true, minimumValue: 28 },
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
              random: true,
            },
          },
        }}
      />
    </div>
  );
};

export default TesteParticles;
