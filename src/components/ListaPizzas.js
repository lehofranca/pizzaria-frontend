import React, { useEffect, useState } from 'react';
import './ListaPizzas.css'; // Arquivo CSS externo
import { Link } from 'react-router-dom';

export default function ListaPizzas() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

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

  if (loading) return <p>Carregando pizzas...</p>;
  if (erro) return <p style={{ color: "red" }}>{erro}</p>;

  return (
    <div className="lista-container">
      {pizzas.map((pizza) => (
        <div className="pizza-card" key={pizza.id}>
          <h3>{pizza.nome}</h3>
          <p>{pizza.descricao}</p>
          <p className="preco">R$ {pizza.preco.toFixed(2)}</p>
          <Link to={`/pizza/${pizza.id}`} className="btn-detalhes">
            Ver detalhes
          </Link>
        </div>
      ))}
    </div>
  );
}
