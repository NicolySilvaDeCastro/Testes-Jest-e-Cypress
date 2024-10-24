
describe('Teste de Login', () => {
    it('deve fazer login e redirecionar para o dashboard', () => {
        cy.visit('/login');
        cy.get('input[name=username]').type('seu_usuario');
        cy.get('input[name=password]').type('sua_senha'); 
        cy.get('button[type=submit]').click();

        cy.url().should('include', '/dashboard'); 
    });
});
