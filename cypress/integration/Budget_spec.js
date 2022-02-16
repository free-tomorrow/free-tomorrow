describe('Budget Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/budget')
  })

  it('should have a sample test', () => {
    expect(true).to.eq(true)
  })

  it('should prompt the user to select a budget', () => {
    cy.get('.budget-form > .txt-container')
      .children()
      .should('contain', 'What\'s your budget for this?')
      .and('contain', 'No pressure on our end. Just pick whatever works for you.')
  })

  it('should have a selection of budget options', () => {
    cy.get('.budget-btn-container')
      .children()
      .should('contain', '$250')
      .and('contain', '$500')
      .and('contain', '$1000')
      .and('contain', '$1500')
      .and('contain', '$2000')
      .and('contain', 'The sky\'s the limit!')
  })

  it('should prompt the user to confirm their selection onClick', () => {
    cy.get('.budget-continue-btn')
    .should('not.exist')
    cy.get('button[value="500"]')
    .click()
    .get('.budget-continue-btn')
    .contains('Set the budget to $500?')
  })
  
  it('should redirect to the share page after budget confirmation', () => {
    cy.get('.budget-continue-btn')
    .should('not.exist')
    cy.get('button[value="500"]')
    .click()
    .get('.budget-continue-btn')
    .contains('Set the budget to $500?')
    .click()
    .url('eq','http://localhost:3000/share')
    .get('.budget-form')
    .should('not.exist')
  })
})