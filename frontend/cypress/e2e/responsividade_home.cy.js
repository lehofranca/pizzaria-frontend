// Teste automatizado de responsividade da página inicial

describe ( 'Responsividade de Página Inicial'. () => {
const viewports= [
{label:  'mobile', width: 360, height: 640}, // Android genérico
{ label: 'tablet', width: 768, height: 1024}, // Ipad Air
{ label: 'desktop', width: 1440, height: 900} // Tela comum de notebook
];

const titulosEsperados = [
  'Pizzaria Lefrance',
  'Pizzas',
  'Detalhes da Pizza',
  'Cadastro de Pizza',
  'Cadastro de Cliente',
  'Carrinho'
];

viewports.forEach(({label, widt, height}) => {
  it ('Deve exibir corretamente em ${label}')


    // Verifica se o título da página está correto
    cy.title().should('include', 'Pizzaria Lefrance');

    // Verifica se os títulos esperados estão visíveis
    titulosEsperados.forEach(titulo => {
      cy.contains(titulo).should('be.visible');
    });

    // Verifica se o link para a lista de pizzas está visível
    cy.get('a[href="/pizzas"]').should('be.visible');
  });
});
});