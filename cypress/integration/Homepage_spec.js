describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true)
  })


  it('should display the site\s name and intro text', () => {
    cy.get('.welcome-txt')
    .get('h1').contains('Free Tomorrow?')
    .get('h2').contains('An app that helps you get your travel plans out of the air and onto the ground.')
  })
})