// src/components/DetalhesPizza.js

// Importa o React para uso de JSX e hooks
import React from 'react';

// Importa hooks do React Router para pegar o ID da URL e navegar com Link
import { useParams, Link } from 'react-router-dom';

// Importa o hook do carrinho de compras para adicionar itens
import { useCart } from '../contexts/CartContext';

// Importa o CSS da página de detalhes
import './DetalhesPizza.css';

// Dados simulados (mock) com ID incluído — necessário para manipular o carrinho corretamente
const pizzaFake = {
  1: {
    id: 1,
    nome: 'Calabresa',
    ingredientes: 'Calabresa, queijo mussarela, cebola e orégano',
    preco: 45,
  },
  2: {
    id: 2,
    nome: 'Marguerita',
    ingredientes: 'Queijo mussarela, tomate e manjericão fresco',
    preco: 42,
  },
  3: {
    id: 3,
    nome: 'Quatro Queijos',
    ingredientes: 'Mussarela, provolone, gorgonzola e parmesão',
    preco: 48,
  },
};

// Define o componente funcional DetalhesPizza
export default function DetalhesPizza() {
  // Extrai o parâmetro "id" da URL (ex: /pizza/2 → id = "2")
  const { id } = useParams();

  // Busca a pizza correspondente no objeto mockado
  const pizza = pizzaFake[id];

  // Hook do carrinho para acessar a função de adicionar ao carrinho
  const { addToCart } = useCart();

  // Função chamada ao clicar no botão
  const handleAddToCart = () => {
    addToCart(pizza);
  };

  // Renderiza os detalhes da pizza
  return (
    <div className="detalhes-pizza">
      {/* Nome da pizza */}
      <h1>{pizza.nome}</h1>

      {/* Ingredientes da pizza */}
      <p><strong>Ingredientes:</strong> {pizza.ingredientes}</p>

      {/* Preço formatado */}
      <p><strong>Preço:</strong> R$ {pizza.preco.toFixed(2)}</p>

      {/* Botão para adicionar ao carrinho */}
      <button
        onClick={handleAddToCart}
        style={{
          background: '#3b7264',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '1rem'
        }}
      >
        Adicionar ao Carrinho
      </button>
      <br />

      {/* Link para voltar à lista de pizzas */}
      <Link to="/pizzas" style={{ color: '#3b7264', textDecoration: 'none' }}>
        ← Voltar para a lista de pizzas
      </Link>
    </div>
  );
}
// Fim do componente DetalhesPizza
// Este componente renderiza os detalhes de uma pizza específica, permitindo ao usuário adicioná-la ao carrinho
// A navegação é feita através do React Router, e os dados são simulados para fins de demonstração
// O botão de adicionar ao carrinho chama a função do contexto do carrinho para atualizar o estado global
// O estilo inline é usado para simplificar a aparência do botão e do link de navegação 