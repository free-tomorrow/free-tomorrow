describe('Schedule component tests', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000/')
    cy.get('button[class="homepg-signup-btn"]')
    .click()

  })

  it('should allow the user to visit the schedule page', () => {

    cy.url('eq', 'http://localhost:3000/schedule')

  })

  it('should render the correct elements', () => {

    cy.get('section[class="schedule-txt"]').should('exist')
    cy.get('div[class="schedule-txt-p-cont"]').should('exist')
    cy.get('div[class="btn-container"]').should('exist')
    cy.get('div[class="calendar-container"]').should('exist')
    cy.get('.calendar').should('exist')
    cy.get('button[class="continue-btn"]').should('exist')
    cy.get('a[class="budget-link"]').should('exist')

  })

  it('should introduce the user to the page', () => {

    cy.get('section[class="schedule-txt"]').should('exist')
    cy.get('h1').should('contain', 'When are you free?')
    cy.get('p').should('contain', 'Select as many dates as you like...')
    cy.get('p').should('contain', `Don't worry, we'll keep track.`)

  })

  it('should allow the user to select dates on the calendar', () => {

    cy.get('.react-calendar__year-view__months > :nth-child(8)')
    .click()
    cy.get('.react-calendar__month-view__days > :nth-child(18)')
    .click()
    cy.get(':nth-child(26)')
    .click()
    cy.get(':nth-child(28)')
    .click()
    cy.get()

  })

  it.skip('should display selected dates on the UI', () => {

    cy.get()

  })

  it.skip('should allow the user to proceed to the budget page', () => {



  })

  it.skip('should link back to home', () => {



  })

  it.skip('should link to all other pages', () => {



  })

})