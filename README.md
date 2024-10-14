## Cypress 
Automated tests that I have created using CypressJS.

### Overview

This project contains automated tests for the SauceDemo website, built using CypressJS. The tests cover basic functionality, such as logging in, adding products to the cart, and verifying that actions are executed successfully on the site. 

## Tests Included

The following automated tests are included in the project:
1. **Login Test**

     - Tests logging in with valid credentials (standard_user).
     - Verifies successful login by checking the URL and page elements.

2. **Invalid Login Test**

    - Tests logging in with invalid credentials (incorrect username or password).
    - Verifies that an error message is displayed upon failed login.

3. **Add Product to Cart Test**

    - Selects a specific product from the inventory (e.g., "Sauce Labs Backpack") and adds it to the cart.
    - Verifies that the product is added to the cart by checking the cart icon and cart page.
