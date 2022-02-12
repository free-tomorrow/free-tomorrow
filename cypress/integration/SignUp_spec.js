describe('SignUp page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup')
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true)
  })

  it('should welcome the user and prompt them for name and email', () => {
    cy.get('.signup-content > h1')
    .contains('Welcome to Free Tomorrow!')
    .get('.signup-form')
    .children()
    .should('contain','We\'ll just need your name')
    .and('contain','And your email')
  })

  it('should allow typing in both fields', ()=> {
    cy.get('.signup-form > .signup-input-name')
    .type('Bob Loblaw')
    .get('.signup-input-email')
    .type('bobloblaw@loblaw.law')
  })

  it.skip('should clear inputs on click of sign up button', () => {
    cy.get('.signup-form > .signup-input-name')
    .type('Bob Loblaw')
    .get('.signup-input-email')
    .type('bobloblaw@loblaw.law')
    .get('.signup-pg-btn')
    .click()
    .get('.signup-input-name')
    .should('have.value', '')
    .get('.signup-input-email')
    .should('have.value', '')
  })

  it('should be able to navigate back to the base url', () => {
    cy.get('.logo')
    .click()
    .url('eq','http://localhost:3000/')
    .get('.signup-content')
    .should('not.exist')
  })
})