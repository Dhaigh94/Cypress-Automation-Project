describe('My first cypress test', () => {
    it('Should load Example Website', function() {
        cy.visit('https://example.com/')

        cy.url().should('include', 'https://example.com/')
        cy.title().should('eq', 'Example Domain')

        cy.get('h1').as('title')
        cy.get('@title').contains('Example Domain')
        cy.get('@title').should('be.visible')
    })
    it('Should load Google', function() {
        cy.visit("https://google.com.au")
    })
})