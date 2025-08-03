import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 450px;
  margin: 40px auto;
  background: linear-gradient(135deg, #1f1c2c, #928dab);
  padding: 30px 35px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(31, 28, 44, 0.6);
  font-family: 'Poppins', sans-serif;
  color: #eee;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 24px;
  text-align: center;
  letter-spacing: 1.2px;
  color: #ffd369;
  text-shadow: 0 0 8px #ffd369a1;
`;

const Label = styled.label`
  margin-top: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  margin-top: 6px;
  padding: 10px 14px;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  box-shadow: inset 0 0 5px #fff3;

  &::placeholder {
    color: #ddd;
    font-style: italic;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 8px 2px #ffd369;
  }
`;

const Button = styled.button`
  margin-top: 28px;
  padding: 14px 0;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(45deg, #ff6a00, #ee0979);
  border: none;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(238, 9, 121, 0.7);
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    box-shadow: 0 10px 25px rgba(238, 9, 121, 0.9);
    transform: scale(1.05);
  }

  &:disabled {
    background: #555;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const Message = styled.p`
  margin-top: 18px;
  padding: 12px 15px;
  background-color: #2a2a3d;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  color: #ffd369;
  text-shadow: 0 0 5px #ffd369a1;
`;

function CadastroPizza() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensagem('');

    const novaPizza = {
      nome,
      preco: parseFloat(preco),
      descricao,
      imagem,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/pizzas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(novaPizza),
      });

      if (response.ok) {
        setMensagem('Pizza cadastrada com sucesso!');
        setNome('');
        setPreco('');
        setDescricao('');
        setImagem('');
      } else {
        setMensagem('Erro ao cadastrar pizza');
      }
    } catch (error) {
      setMensagem('Erro ao conectar com o servidor');
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Cadastro de Pizza</Title>

      <Label>Nome:</Label>
      <Input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Ex: Pepperoni"
        required
      />

      <Label>Preço:</Label>
      <Input
        type="number"
        step="0.01"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        placeholder="Ex: 45.90"
        required
      />

      <Label>Descrição:</Label>
      <Input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Ex: Mussarela, pepperoni, orégano"
      />

      <Label>URL da Imagem:</Label>
      <Input
        type="text"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        placeholder="https://exemplo.com/pizza.jpg"
      />

      <Button type="submit" disabled={loading}>
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </Button>

      {mensagem && <Message>{mensagem}</Message>}
    </Form>
  );
}

export default CadastroPizza;
