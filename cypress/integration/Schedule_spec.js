describe('Schedule Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/schedule')
  })

  it('should allow the user to visit the schedule page', () => {
    cy.url('eq', 'http://localhost:3000/schedule')
  })

  it('should render the calendar elements on load', () => {
    cy.get('section[class="schedule-txt"]').should('exist')
    cy.get('div[class="calendar-wrapper"]').should('exist')
    cy.get('.react-calendar').should('exist')
  })

  it('should introduce the user to the page', () => {
    cy.get('section[class="schedule-txt"]').should('exist')
    cy.get('h1').should('contain', 'When are you free?')
    cy.get('p').should('contain', 'Select as many dates as you like...')
    cy.get('p').should('contain', `Don't worry, we'll keep track.`)

  })

  it.skip('should allow the user to select dates on the calendar', () => {
//need to fix Schedule calendar bug before continuing
    cy.get('.react-calendar__year-view__months > :nth-child(8)')
    .click({multiple:true})
    cy.get('.react-calendar__month-view__days > :nth-child(18)')
    .click({multiple:true})
    cy.get(':nth-child(26)')
    .click({multiple:true})
    cy.get(':nth-child(28)')
    .click()
    cy.get()

  })

  it.skip('should display selected dates on the UI', () => {

    cy.get()

  })

  it.skip('should allow the user to proceed to the budget page', () => {



  })

  it('should link back to home on click of site logo', () => {
    cy.get('.logo')
    .click()
    .url('eq','http://localhost:3000/')
    .get('.calendar-wrapper')
    .should('not.exist')
  })

  it.skip('should link to all other pages', () => {



  })

})