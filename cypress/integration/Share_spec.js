describe('Share Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/share')
  })

  it('should have a sample test', () => {
    expect(true).to.eq(true)
  })
  it('should display a trip overview card', () => {
    cy.get('.share-pg')
      .get('.trip-card > .trip-card-txt > h1').contains('Trip Overview')
      .get('.trip-card > .trip-card-txt')
      .children()
      .should('contain', 'Created By:')
      .and('contain', 'Proposed Budget: $')
  })
  it('should allow the user to create a trip name', () => {
    cy.get('.share-form > .share-name-input')
      .type('Bob Loblaws Lawful Trip')
      .get('.trip-card > .trip-card-txt')
      .contains('Bob Loblaws Lawful Trip')
  })

  it('should allow the user to create the trip', () => {
    cy.get('.share-form > .share-name-input')
      .type('Bob Loblaws Lawful Trip')
      .get('.create-trip-btn')
      .should('not.be.disabled')
      .click()
  })

  it('should not allow the user to create a trip with empty input', () => {
    cy.get('.create-trip-btn')
    .should('be.disabled')
  })

  // it('should allow the user to get a link to share their trip', () => {
  //   cy.visit('http://localhost:3000/login')
  //   .get('.login-email-input')
  //   .type('bobloblaw@loblaw.law')
  //   .get('.loginpg-btn')
  //   .click()
  //   .get('.dashboard-create-btn')
  //   .click()
  // })
})