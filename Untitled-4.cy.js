
describe('Add Product to Cart Test', () => {
    it('Should log in and add a product to the cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html');
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
            .parents('.inventory_item')
            .find('button')
            .click();
        cy.get('.shopping_cart_badge').should('contain', '1');
        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');
        cy.get('.cart_item').should('have.length', 1);
    });
});
