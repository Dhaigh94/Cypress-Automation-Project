describe('My first cypress test', () => {
    it('Should load Example Website', function() {
        cy.visit('http://example.com/')

        cy.url().should('include', 'http://example.com/')
        cy.title().should('eq', "Example Domain")

        cy.get('h1').as('title')
        cy.get('@title').contains('Example Domain')
        cy.get('@title').should('be.visible')
    })
})