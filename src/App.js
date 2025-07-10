// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListaPizzas from './components/ListaPizzas';
import DetalhesPizza from './components/DetalhesPizza';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import CadastroPizza from './components/CadastroPizza';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizzas" element={<ListaPizzas />} />
        <Route path="/pizza/:id" element={<DetalhesPizza />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/cadastro-pizza" element={<CadastroPizza />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
