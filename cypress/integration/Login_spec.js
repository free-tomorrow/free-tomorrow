describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true)
  })

  it('should greet the user and prompt them to log in', () => {
    cy.get('.login-content')
    .contains('Good to see you again!')
    .get('.login-form > h2')
    .contains('Let\'s get you logged in.')
  })

  it('should allow the user to enter their email', () => {
    cy.get('.login-form > .login-email-input')
    .type('bobloblaw@loblaw.law')
  })

  //test here for the login button if we decide to have it redirect, display success or error message, etc.

  it('should allow the user to navigate back to the homepage', () => {
    cy.get('.logo')
    .click()
    .url('eq','http://localhost:3000/')
    .get('.login-content')
    .should('not.exist')
  })
})