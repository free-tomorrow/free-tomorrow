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
})