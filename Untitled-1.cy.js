
describe('Login Test with Incorrect Username', () => {
    it('Should display an error message for failed login', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });
});
