describe('Homepage', () => {
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
})