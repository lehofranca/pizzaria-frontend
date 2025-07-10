import React from 'react';
import './PizzaCard.css';

const PizzaCard = ({ pizza, onAddToCart }) => {
  return (
    <div className="pizza-card">
      <img src={pizza.imagemUrl || "/img/default-pizza.png"} alt={pizza.nome} />
      <h2>{pizza.nome}</h2>
      <p>{pizza.descricao}</p>
      <p><strong>Sabores:</strong> {pizza.sabores?.join(', ')}</p>
      <p><strong>Tamanho:</strong> {pizza.tamanho}</p>
      <p><strong>Preço:</strong> R$ {pizza.preco?.toFixed(2)}</p>
      <button onClick={() => onAddToCart(pizza)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default PizzaCard;
