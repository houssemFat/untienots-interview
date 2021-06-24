context('Home', () => {
  it('should check minimal inputs ', () => {
    // should redirect user to login
    cy.visit('/home');
    cy.location('pathname').should('eq', '/auth/login');
    let emailSelector = 'input[id="email"]';
    let passwordSelector = 'input[id="password"]';
    let submitButtonSelector = 'button[type="submit"]';

    // You can test all possible values for regxp and email
    cy.get(emailSelector).type("invalid_password");
    cy.get(passwordSelector).type('invalid password');
    // should display validation error
    cy.get('.error')
      // calls the 'length' property yielding that value
      .its('length')
      .should('be.eq', 2)


    // Valid email but does not exists
    cy.get(emailSelector).clear().type("user@notfound.com");
    // valid password
    cy.get(passwordSelector).clear().type('v123AlidP#');
    cy.get(submitButtonSelector).click({force: true});
    // wa
    cy.wait(2000);
    cy.get('.server-error')
      // calls the 'length' property yielding that value
      .its('length')
      .should('be.eq', 1)
    // valid email
    cy.get(emailSelector).clear().type("user@untienots.com");
    cy.wait(50);
    // click on submit
    cy.get(submitButtonSelector).click();
    cy.wait(1200);
    cy.location('pathname').should('eq', '/home');
  });
});
