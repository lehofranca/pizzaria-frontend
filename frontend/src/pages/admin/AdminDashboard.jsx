import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8000/pizzas", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Erro ao carregar pizzas", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Painel do Administrador</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="border p-4 rounded shadow flex flex-col items-center"
          >
            <h2 className="text-xl font-bold">{pizza.nome}</h2>
            <p>Preço: R$ {pizza.preco.toFixed(2)}</p>
            {/* Botões de ações futuras */}
          </div>
        ))}
      </div>
    </div>
  );
}
