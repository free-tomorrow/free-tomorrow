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

  it('should have an image of a calendar', () => {
    cy.get('.calendar-img')
    .should('have.attr', 'src', '/static/media/calendar_green.99c7ccb235dbaa3da29e.png'
    )
  })

  it('should have a button to start the trip creation process', () => {
    cy.get('.homepg-signup-btn')
    .contains('Sign up to get started')
  })

  it('should link to the schedule page on click of start button', () => {
    cy.get('.homepg-signup-btn')
    .click()
    cy.url('eq','http://localhost:3000/signup')
    cy.get('welcome-container')
    .should('not.exist')
  })
})