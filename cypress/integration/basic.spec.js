describe('My first cypress test', () => {
    it('Should load Fake Website', function() {
        cy.visit('https://www.ultimateqa.com/fake-landing-page/')

        cy.url().should('include', 'https://www.ultimateqa.com/fake-landing-page/')
        cy.title().should('eq', "Fake landing page - Ultimate QA")

        cy.get('h1').as('title')
        cy.get('@title').contains('Learn to Code Websites, Apps & Games')
        cy.get('@title').should('be.visible')
    })
})