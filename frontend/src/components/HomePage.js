// src/components/HomePage.js

// Importa o React para usar JSX e hooks
import React, { useCallback } from 'react';

// Importa o hook de navegação do React Router - (useNavigate) A partir da tela home, vai direcionar para pizza 1,
//  diferente do Modal que exibiria um conteúdo específico na mesma página
import { useNavigate } from 'react-router-dom';

// Importa o componente de partículas animadas
import Particles from 'react-tsparticles';

// Importa a função para carregar todas as opções do tsparticles
import { loadFull } from 'tsparticles';

// Importa os sprites de pizza personalizados para usar nas partículas
import pizzaSprites from '../assets/pizzaSprites';

// Importa o CSS específico da HomePage
import './HomePage.css';

// Define o componente funcional HomePage
const HomePage = () => {
  // Hook de navegação do React Router para redirecionar o usuário
  const navigate = useNavigate();

  // Função que inicializa as partículas animadas com configuração completa
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Função executada ao clicar no botão "Peça Agora"
  const handleClick = () => {
    // Redireciona o usuário para a rota da pizza de ID 1
    navigate('/pizza/1');
  };

  // Retorna o JSX do componente
  return (
    <div className="homepage">
      {/* Componente de partículas animadas com configuração customizada */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: '#0d0d0d' } },
          particles: {
            number: { value: 10, density: { enable: true, area: 800 } },
            shape: { type: 'image', image: pizzaSprites },
            size: {
              value: 32,
              random: { enable: true, minimumValue: 24 },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'bounce' },
            },
            opacity: { value: 1 },
          },
          detectRetina: true,
        }}
      />

      {/* Título principal da página */}
      <h1 className="title">Bem-vindo ao Universo da Pizzaria</h1>

      {/* Seção de chamada para ação com botão de pedido */}
      <div className="call-to-action">
        <h2>Peça sua pizza favorita agora!</h2>

        {/* Botão que redireciona para a página da Pizza Calabresa */}
        <button className="btn-peca-agora" onClick={handleClick}>
          Peça Agora
        </button>
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outras partes do app
export default HomePage;
