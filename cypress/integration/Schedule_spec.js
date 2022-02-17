import { getByAltText } from "@testing-library/react"

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

  it('should allow the user to select dates on the calendar', () => {
    cy.get('.react-calendar__month-view__days > :nth-child(22)')
    .click({multiple:true})
    cy.get('.react-calendar__month-view__days > :nth-child(24)')
    .click({multiple:true})
    cy.get('.react-calendar__month-view__days > :nth-child(27)')
    .click({multiple:true})
    cy.get(':nth-child(28)')
    .click()

  })

  it('should display selected dates on the UI', () => {

    cy.get('.react-calendar__month-view__days > :nth-child(22)')
    .click({multiple:true})
    cy.get('.react-calendar__month-view__days > :nth-child(24)')
    .click({multiple:true})
    cy.get('.react-calendar__month-view__days > :nth-child(27)')
    .click({multiple:true})
    cy.get(':nth-child(28)')
    .click()

    cy.get('h2').should('contain', `You're free:`)
    cy.get('.dates-list > p').should('contain', 'Mon Feb 21 2022 - Wed Feb 23 2022')
    cy.get('.dates-list > p').should('contain', 'Sat Feb 26 2022 - Sun Feb 27 2022')

  })

  it('should allow the user to proceed to the budget page', () => {

    cy.get('.react-calendar__month-view__days > :nth-child(22)')
    .click({multiple:true})
    cy.get('.react-calendar__month-view__days > :nth-child(24)')
    .click({multiple:true})
    cy.get('.react-calendar__month-view__days > :nth-child(27)')
    .click({multiple:true})
    cy.get(':nth-child(28)')
    .click()

    cy.get('.schedule-continue-btn').click()
    cy.url('eq', 'http://localhost:3000/budget')

  })

  it('should link back to home on click of site logo', () => {
    cy.get('.logo')
    .click()
    .url('eq','http://localhost:3000/')
    .get('.calendar-wrapper')
    .should('not.exist')
  })

  it('should link to about page', () => {

    cy.get('.nav-link').click()
    cy.url('eq', 'http://localhost:3000/about')

  })

})