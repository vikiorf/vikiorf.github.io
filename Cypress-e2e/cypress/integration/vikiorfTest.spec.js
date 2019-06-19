describe('Vikiorf test', function() {
    it('Visits the Kitchen Sink', function() {
      cy.visit('https://vikiorf.github.io')
      
      cy.get('#textAppearss').should('have.value', '')

      cy.contains('Click me!').click()

      cy.get('[data-cy=textAppears]')
        .should('have.value', 'Bacon')

    })
  })