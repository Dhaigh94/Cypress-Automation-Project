describe('My first cypress test', () => {
    it('Should load example.com', function() {
        // Goes to example.com
        cy.visit('https://example.com/')

        // The website shows in the url
        cy.url().should('include', 'https://example.com/')
        // The website title shows in the tab
        cy.title().should('eq', 'Example Domain')

        cy.get('h1').as('title')
        cy.get('@title').contains('Example Domain')
        cy.get('@title').should('be.visible')
    })
    it('Should load google.com.au', function() {
        cy.visit("https://google.com.au")
    })
})