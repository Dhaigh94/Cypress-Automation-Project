describe('My first Portfolio cypress test', () => {
    it('Should load my Online Portfolio on the Home page', function() {
        cy.visit('/')

        cy.url().should('include', 'https://www.davidhaighportfolio.com')
        cy.title().should('eq', "David's Portfolio")

        cy.get('h1').as('title')
        cy.get('@title').contains('About Me')
        cy.get('@title').should('be.visible')
    })
    it('Should load not Online Portfolio Page', function() {
        cy.visit("https://www.apple.com/au/")
    })
})