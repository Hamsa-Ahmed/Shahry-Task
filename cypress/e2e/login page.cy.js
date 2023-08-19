describe('login page', () => {
  it('standard user login passes', () => {
    it('login user', () => {
      cy.visit('https://www.saucedemo.com/'),
      cy.get('input[name="username"]').type('standard_user'),
      cy.get('input[name="passsword"]').type('1234'),
      cy.get('#login-button').click(),
      cy.location('pathname').should('include','/inventory.html')  })
})

it('locked out user login passes', () => {
  it('login user', () => {
    cy.visit('https://www.saucedemo.com/'),
    cy.get('input[name="username"]').type('locked_out_user'),
    cy.get('input[name="passsword"]').type('1234'),
    cy.get('#login-button').click(),
    cy.location('pathname').should('include','/inventory.html')  })
})

it('problem user login passes', () => {
  it('login user', () => {
    cy.visit('https://www.saucedemo.com/'),
    cy.get('input[name="username"]').type('problem_user'),
    cy.get('input[name="passsword"]').type('1234'),
    cy.get('#login-button').click(),
    cy.location('pathname').should('include','/inventory.html')  })
})

it('performance glitch user login passes', () => {
  it('login user', () => {
    cy.visit('https://www.saucedemo.com/'),
    cy.get('input[name="usetypername"]').type('performance_glitch_user'),
    cy.get('input[name="passsword"]').type('1234'),
    cy.get('#login-button').click(),
    cy.location('pathname').should('include','/inventory.html')    
  })
})

it('incorrect user login passes', () => {
  it("login is not correct", () => {
    cy.visit('https://www.saucedemo.com/'),
    // cy.contains("Username and password do not match any user in this service").should("not.exist"),
    cy.get('input[name="usetypername"]').type("admins"),
    cy.get('input[type = "password"]').type("admins"),
    cy.get(".MuiButton-label").contains("Login").should("be.visible").click(),
    cy.contains("Username and password do not match any user in this service").should('be.visible')

  })
})

it('incorrect user login passes', () => {
  it('displays error message for incorrect login', () => {
    cy.visit('https://www.saucedemo.com/'),
    cy.get('input[name="username"]').type('incorrect_username');
    cy.get('input[name="password"]').type('incorrect_password');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid username or password').should('be.visible');
  });
});






})
