import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetalhesPizza.css';

const pizzaFake = {
  1: {
    nome: 'Calabresa',
    ingredientes: 'Calabresa, queijo mussarela, cebola e orégano',
    preco: 45,
  },
  2: {
    nome: 'Marguerita',
    ingredientes: 'Queijo mussarela, tomate e manjericão fresco',
    preco: 42,
  },
  3: {
    nome: 'Quatro Queijos',
    ingredientes: 'Mussarela, provolone, gorgonzola e parmesão',
    preco: 48,
  },
};

export default function DetalhesPizza() {
  const { id } = useParams();
  const pizza = pizzaFake[id];

  if (!pizza) return <p>Pizza não encontrada.</p>;

  return (
    <div className="detalhes-container">
      <h2>{pizza.nome}</h2>
      <p><strong>Ingredientes:</strong> {pizza.ingredientes}</p>
      <p><strong>Preço:</strong> R$ {pizza.preco},00</p>
      <Link to="/" className="voltar-link">← Voltar ao cardápio</Link>
    </div>
  );
}
