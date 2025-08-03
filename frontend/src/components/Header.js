// Importa React para JSX e Link para navegação entre rotas
import React from 'react';
import { Link } from 'react-router-dom';

// Importa o hook customizado do contexto do carrinho para acessar dados do carrinho
import { useCart } from '../contexts/CartContext';

// Importa o arquivo CSS externo com estilos do Header
import './Header.css';

// Componente funcional Header
const Header = () => {
  // Extrai os itens do carrinho usando o hook do contexto
  const { cartItems } = useCart();

  // Calcula o total de itens no carrinho somando as quantidades
  const totalItens = cartItems.reduce((acc, item) => acc + item.quantidade, 0);

  // Retorna o JSX que será renderizado
  return (
    // Container principal do header com classe para estilização CSS
    <header className="header">
      
      {/* Link para a página inicial, com título da pizzaria */}
      <Link to="/" className="header-title">
        🍕 Pizzaria Lefrance
      </Link>
      
      {/* Link para o carrinho, mostrando o número total de itens */}
      <Link to="/carrinho" className="header-cart">
        🛒 Carrinho ({totalItens})
      </Link>
    </header>
  );
};

// Exporta o componente Header para uso em outras partes do app
export default Header;
