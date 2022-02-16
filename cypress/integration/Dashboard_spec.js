describe('Dashboard', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://free-tomorrow-be.herokuapp.com/users/', { status: 200, fixture: 'users'})
    cy.visit('http://localhost:3000/dashboard/1')
    // .get('.login-btn')
    // .click()
    // .get('.login-email-input')
    // .type('drnecrason@comcast.net')
    // .get('.loginpg-btn')
    // .click()
  })

  it('should have a sample test', () => {
    expect(true).to.eq(true)
  })

  it('should greet the user', () => {
    cy.get('.dashboard-greeting')
    .children()
    .should('contain', 'Welcome Delilah')
    .and('contain', 'Here\'s an overview of your account')
    // .and('contain', 'You have no pending trip invitations.')
  })

  // it('should display the user\'s created trips', () => {
  //   cy.get('.dashboard-cards > :nth-child(1) > .trip-card-txt')
  //   .get(':nth-child(1) > .trip-card-txt > :nth-child(2)')
  //   .contains('Best Trip Ever')
  // })

  it('should display a button to create a new trip', () => {
    cy.get('.create-invite-wrapper')
    .contains('Create a new trip')
  })
})