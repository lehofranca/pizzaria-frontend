// src/components/ListaPizzas.js

// Importa o React e os hooks de estado e efeito
import React, { useEffect, useState } from 'react';

// Importa o CSS específico da listagem de pizzas
import './ListaPizzas.css';

// Importa o Link para navegar para os detalhes de uma pizza
import { Link } from 'react-router-dom';

// Importa o hook do contexto do carrinho
import { useCart } from '../contexts/CartContext';

// Define o componente funcional ListaPizzas
export default function ListaPizzas() {
  // Estado que armazena a lista de pizzas vinda da API
  const [pizzas, setPizzas] = useState([]);

  // Estado para controle de carregamento
  const [loading, setLoading] = useState(true);

  // Estado para armazenar mensagens de erro, caso ocorram
  const [erro, setErro] = useState(null);

  // Acessa a função addToCart do contexto
  const { addToCart } = useCart();

  // useEffect para carregar as pizzas da API ao montar o componente
  useEffect(() => {
    async function carregarPizzas() {
      try {
        const resposta = await fetch("http://localhost:8000/pizzas");
        if (!resposta.ok) {
          throw new Error("Erro ao carregar as pizzas");
        }
        const dados = await resposta.json();
        setPizzas(dados);
      } catch (erro) {
        setErro(erro.message);
      } finally {
        setLoading(false);
      }
    }

    carregarPizzas();
  }, []);

  // Exibe mensagem de carregamento enquanto busca os dados
  if (loading) return <p>Carregando pizzas...</p>;

  // Exibe erro, se houver
  if (erro) return <p style={{ color: "red" }}>{erro}</p>;

  return (
    <div className="lista-container">
      {/* Mapeia as pizzas e cria um card para cada uma */}
      {pizzas.map((pizza) => (
        <div className="pizza-card" key={pizza.id}>
          {/* Nome da pizza */}
          <h3>{pizza.nome}</h3>

          {/* Descrição da pizza */}
          <p>{pizza.descricao}</p>

          {/* Preço da pizza formatado */}
          <p>R$ {pizza.preco.toFixed(2)}</p>

          {/* Botão para adicionar ao carrinho */}
          <button onClick={() => addToCart(pizza)}>
            Adicionar ao carrinho
          </button>

          {/* Link para detalhes da pizza */}
          <Link to={`/pizza/${pizza.id}`}>
            Detalhes
          </Link>
        </div>
      ))}
    </div>
  );
}
