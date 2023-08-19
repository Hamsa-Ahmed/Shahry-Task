describe('Adding and Removing Items from Cart', () => {
  // beforeEach(() => {
  //   // Visit the website or perform any necessary setup steps
  //   cy.visit('https://www.saucedemo.com/'),
  //   cy.get('input[name="username"]').type('standard_user'),
  //   cy.get('input[name="passsword"]').type('1234'),
  //   cy.get('#login-button').click(),
  //   cy.location('pathname').should('include','/inventory.html')  })
  
  it('should add items to the cart', () => {
    it('should add items to the cart', () => {
  // Add items to the cart
      cy.visit('https://www.saucedemo.com/'),
      cy.get('input[name="username"]').type('standard_user'),
      cy.get('input[name="passsword"]').type('1234'),
      cy.get('#login-button').click(),
      cy.location('pathname').should('include','/inventory.html')
      cy.get('add-to-cart-Sauce-Labs-Lackpack').eq(0).find('.add-to-cart-button').click();
      cy.get('add-to-cart-Sauce-Labs-Bike-Bight').eq(1).find('.add-to-cart-button').click();
      cy.get('add-to-cart-Sauce-Labs-Bolt-T-Shirt').eq(2).find('.add-to-cart-button').click();

      // Verify that items are added to the cart
      cy.get('.cart-items').should('have.length', 3);
    });
  })
  
  it('should add items to the cart', () => {  
    it('should remove items from the cart', () => {
      // Add items to the cart (assuming cart is initially empty)
      cy.visit('https://www.saucedemo.com/'),
      cy.get('input[name="username"]').type('standard_user'),
      cy.get('input[name="passsword"]').type('1234'),
      cy.get('#login-button').click(),
      cy.location('pathname').should('include','/inventory.html')
      cy.get('add-to-cart-Sauce-Labs-Lackpack').eq(0).find('.add-to-cart-button').click();
      cy.get('add-to-cart-Sauce-Labs-Bike-Bight').eq(1).find('.add-to-cart-button').click();
      cy.get('add-to-cart-Sauce-Labs-Bolt-T-Shirt').eq(2).find('.add-to-cart-button').click();

      // Remove an item from the cart
      cy.get('.cart-items').eq(1).find('.remove-button').click();

      // Verify that the item is removed from the cart
      cy.get('.cart-items').should('have.length', 2);

    })
  })
  
})


