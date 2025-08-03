// cadastroCliente.e2e.spec.js

describe('Cadastro de Cliente', () => {
  // Antes de cada teste, visitar a página de cadastro
  beforeEach(() => {
    cy.visit('http://localhost:3000/cadastro-cliente'); // URL do seu form
  });

  it('deve cadastrar cliente com sucesso quando todos os campos forem válidos', () => {
    cy.get('input[placeholder="Nome completo"]').type('João Silva');
    cy.get('input[placeholder="email@exemplo.com"]').type('joao@email.com');
    cy.get('input[placeholder="(00) 00000-0000"]').type('(11) 98888-7777');
    cy.get('input[placeholder*="Rua"]').type('Rua Teste, 123 - Centro, São Paulo');

    cy.get('button[type="submit"]').click();

    // Verifica se a mensagem de sucesso apareceu
    cy.contains('Cliente cadastrado com sucesso!').should('be.visible');
  });

  it('deve mostrar erro se algum campo estiver vazio', () => {
    cy.get('button[type="submit"]').click(); // envia o formulário sem preencher

    cy.contains('Por favor, preencha todos os campos.').should('be.visible');
  });

  it('deve mostrar erro se o e-mail for inválido', () => {
    cy.get('input[placeholder="Nome completo"]').type('Maria');
    cy.get('input[placeholder="email@exemplo.com"]').type('emailerrado');
    cy.get('input[placeholder="(00) 00000-0000"]').type('(11) 97777-5555');
    cy.get('input[placeholder*="Rua"]').type('Av. Paulista, 999 - SP');

    cy.get('button[type="submit"]').click();

    cy.contains('Por favor, insira um email válido.').should('be.visible');
  });
});
