// src/contexts/CartContext.js

// Importa os hooks e funções do React
import React, { createContext, useContext, useState } from 'react';

// REMOVIDO exportação incorreta:
// export const useCart = UseCart;
// export { useCart };

// Cria o contexto do carrinho
const CartContext = createContext();

// Hook customizado para acessar o contexto de forma simples
// Este hook permite que outros componentes acessem o contexto do carrinho sem precisar usar useContext diretamente
// Ele encapsula a lógica de acesso ao contexto, tornando o código mais limpo e fácil
export const useCart = () => useContext(CartContext);

// Componente que fornece o contexto do carrinho para o app inteiro
// Este componente deve envolver a parte do app onde você quer que o contexto esteja disponível
// Ele usa o estado interno para armazenar os itens do carrinho e fornece uma função para
// adicionar pizzas ao carrinho. A função addToCart verifica se a pizza já existe no carrinho
// e, se existir, incrementa a quantidade. Se não existir, adiciona a pizza com quantidade 1.
// O estado cartItems é um array de objetos, onde cada objeto representa uma pizza no carrinho,
// incluindo suas propriedades originais e uma propriedade quantidade para rastrear quantas vezes a pizza foi adicionada.

export const CartProvider = ({ children }) => {

  // Estado com os itens do carrinho (array de pizzas)
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar uma pizza ao carrinho
  const addToCart = (pizza) => {
    // Verifica se a pizza já está no carrinho   
    const itemExistente = cartItems.find(item => item.id === pizza.id);

    if (itemExistente) {
      // Se já existe, atualiza a quantidade
      setCartItems(prev =>
        prev.map(item =>
          item.id === pizza.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      // Se não existe, adiciona com quantidade = 1
      setCartItems(prev => [...prev, { ...pizza, quantidade: 1 }]);
    }
  };

  // Função para remover item do carrinho (corrigido nome para removeFromCart)
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Função para atualizar a quantidade de um item no carrinho
  const updateQuantity = (id, novaQuantidade) => {
    // Opcional: proteção contra quantidade menor que 1
    if (novaQuantidade < 1) return;

    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantidade: novaQuantidade }
          : item
      )
    );
  };

  // Função para calcular o preço total
  const calcularTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.preco * item.quantidade);
    }, 0);
  };

  // Dados e funções que serão acessíveis pelo app
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        calcularTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// Fim do CartProvider
// Este componente deve ser usado no App.js para envolver as rotas, assim todos os componentes 
// dentro do CartProvider terão acesso ao contexto do carrinho.     