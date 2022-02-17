describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .get('.login-btn')
    .click()
    .get('.login-email-input')
    .type('drnecrason@comcast.net')
    .get('.loginpg-btn')
    .click()
  })

  it('should have a sample test', () => {
    expect(true).to.eq(true)
  })

  it('should greet the user', () => {
    cy.get('.dashboard-greeting')
    .children()
    .should('contain', 'Welcome Delilah')
    .and('contain', 'Here\'s an overview of your account')
  })

  it('should display a button to create a new trip', () => {
    cy.get('.create-invite-wrapper')
    .contains('Create a new trip')
  })
})