// src/App.js

// Importa as dependências principais
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa os componentes de páginas
import HomePage from './components/HomePage';
import ListaPizzas from './components/ListaPizzas';
import DetalhesPizza from './components/DetalhesPizza';
import CadastroPizza from './components/CadastroPizza';
import CadastroCliente from './components/CadastroCliente';
import Carrinho from './components/Carrinho'; // (em breve)

// Importa o contexto do carrinho
import { CartProvider } from './contexts/CartContext';

// Importa o componente Header (barra superior com link para o carrinho)
import Header from './components/Header';

function App() {
  return (
    // CartProvider torna o carrinho acessível para todo o app
    <CartProvider>
      {/* BrowserRouter gerencia as rotas da aplicação */}
      <BrowserRouter>
        {/* Cabeçalho fixo com navegação para todas as páginas */}
        <Header />

        {/* Define as rotas do app */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizzas" element={<ListaPizzas />} />
          <Route path="/pizza/:id" element={<DetalhesPizza />} />
          <Route path="/cadastro/pizza" element={<CadastroPizza />} />
          <Route path="/cadastro/cliente" element={<CadastroCliente />} />
          <Route path="/carrinho" element={<Carrinho />} /> {/* em breve */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
// Fim do App.js
// Este arquivo é o ponto de entrada da aplicação React, onde as rotas são definidas
// e o contexto do carrinho é disponibilizado para todos os componentes.
// Ele usa o React Router para gerenciar a navegação entre as diferentes páginas,
// como a lista de pizzas, detalhes de uma pizza específica, cadastro de novas pizzas,
// cadastro de clientes e o carrinho de compras.
// O componente Header é incluído para fornecer uma navegação consistente em toda a aplicação.
// O CartProvider envolve todo o app para que o contexto do carrinho esteja disponível em qualquer componente que precise acessar ou modificar o carrinho de compras.
// O carrinho de compras é acessível através da rota "/carrinho", onde o usuário pode ver os itens adicionados, atualizar quantidades e remover itens.
// As outras rotas permitem navegar entre a página inicial, lista de pizzas, detalhes de uma pizza específica e formulários de cadastro.
// O uso de rotas dinâmicas (como "/pizza/:id") permite que o app exiba detalhes de pizzas específicas com base no ID passado na URL.
// O componente HomePage é a página inicial, que pode conter informações gerais ou um banner de boas-vindas.
// O componente ListaPizzas exibe uma lista de pizzas disponíveis, permitindo que o usuário veja as opções e navegue para os detalhes de cada uma.
// O componente DetalhesPizza exibe informações detalhadas sobre uma pizza específica, incluindo ingredientes e preço, e permite adicionar a pizza ao carrinho.
// O componente CadastroPizza permite que administradores ou usuários autorizados cadastrem novas pizzas no sistema.
// O componente CadastroCliente permite que novos clientes se cadastrem, possivelmente para realizar pedidos futuros.
// O componente Carrinho exibe os itens que o usuário adicionou ao carrinho de compras, permitindo gerenciar quantidades, remover itens e ver o total da compra.
// O uso de contextos e hooks do React Router torna a navegação e o gerenciamento de estado mais simples e eficiente, permitindo que o app seja escalável e fácil de manter.
// O app é estruturado para ser responsivo e amigável ao usuário, com uma interface intuitiva para navegar entre as diferentes seções e realizar pedidos de forma fácil e rápida.
// O uso de componentes separados para cada funcionalidade ajuda a manter o código organizado e modular,
// facilitando a manutenção e futuras expansões do aplicativo.    