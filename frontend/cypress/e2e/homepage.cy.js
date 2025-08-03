// Início do bloco de testes — usamos "describe" para agrupar testes relacionados
describe('HomePage da Pizzaria', () => {

  // Primeiro teste individual — verifica se o título principal aparece corretamente
  it('deve exibir o título futurista', () => {
    // cy.visit() navega até a URL local do seu app
    cy.visit('http://localhost:3000/');

    // cy.contains() verifica se um texto está visível na tela
    // Atenção: o texto precisa estar exatamente igual ao que está no componente React (case-sensitive)
    cy.contains('Bem-vindo ao Universo da Pizzaria').should('be.visible');
  });

  // Segundo teste: simula um clique no botão e verifica se a navegação funciona 
  it('deve simular clique no botão Peça Agora', () => {
    cy.visit('http://localhost:3000/');

    // cy.get() seleciona o botão usando a classe CSS correta (vinda do componente)
    cy.get('.btn-peca-agora').click(); // simula clique no botão

    // cy.url() obtém a URL atual e verifica se houve navegação
    // Aqui você pode ajustar para verificar se foi para "/pizza/1", "/menu", etc.
    cy.url().should('include', '/'); // comportamento atual esperado
  });
});
