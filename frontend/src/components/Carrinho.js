// src/components/Carrinho.js

// Importa o React para usar JSX e componentes funcionais
import React from 'react';

// Importa o hook de navegação do React Router
import { useNavigate } from 'react-router-dom';

// Importa o hook customizado que dá acesso ao contexto do carrinho
import { useCart } from '../contexts/CartContext';

// Define o componente funcional Carrinho
const Carrinho = () => {
  // Extrai funções e dados do contexto do carrinho
  const { cartItems, removeFromCart, updateQuantity, calcularTotal } = useCart();

  // Hook de navegação para redirecionar o usuário
  const navigate = useNavigate();

  // Função para voltar à listagem de pizzas
  const voltarParaPizzas = () => {
    navigate('/pizzas');
  };

  // Retorna o JSX que será renderizado na tela
  return (
    <div className="carrinho-container">
      {/* Título da página do carrinho */}
      <h1>🛒 Carrinho de Compras</h1>

      {/* Se o carrinho estiver vazio, exibe uma mensagem */}
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio. 😢</p>
      ) : (
        <>
          {/* Lista os itens adicionados ao carrinho */}
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                {/* Nome e preço da pizza */}
                <strong>{item.nome}</strong> — R$ {item.preco.toFixed(2)}  
                <br />

                {/* Campo para alterar a quantidade da pizza */}
                Quantidade: 
                <input
                  type="number"
                  min="1"
                  value={item.quantidade}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  style={{ width: '50px', marginLeft: '0.5rem' }}
                />
                <br />

                {/* Botão para remover item do carrinho */}
                <button onClick={() => removeFromCart(item.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>

          {/* Exibe o valor total somando todos os itens */}
          <h2>Total: R$ {calcularTotal().toFixed(2)}</h2>

          {/* Botão para voltar à página de pizzas e continuar comprando */}
          <button onClick={voltarParaPizzas}>
            Continuar comprando
          </button>
        </>
      )}
    </div>
  );
};

// Exporta o componente Carrinho para uso no App.js e nas rotas
export default Carrinho;

// Fim do componente Carrinho
// Este componente renderiza o carrinho de compras, permitindo ao usuário ver os itens adicionados
// e gerenciar a quantidade de cada item, além de calcular o total da compra.
// Ele também permite remover itens do carrinho e voltar à lista de pizzas para continuar comprando.
// O carrinho é acessível através da rota "/carrinho" no App.js.  