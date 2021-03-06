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

  it('should not allow the user to login without a valid email format', () => {
    cy.get('.loginpg-btn')
      .should('be.disabled').and('have.css', 'cursor', 'not-allowed')
      .get('.login-email-input')
      .type('bobloblaw@')
      .get('.loginpg-btn')
      .should('be.disabled')
      .get('.login-email-input')
      .type('loblaw.law')
      .get('.loginpg-btn')
      .should('not.be.disabled').and('have.css', 'cursor', 'pointer')
  })


  it('should allow the user to navigate back to the homepage', () => {
    cy.get('.logo')
    .click()
    .url('eq','http://localhost:3000/')
    .get('.login-content')
    .should('not.exist')
  })
})