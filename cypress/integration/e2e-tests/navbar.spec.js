describe('Navbar Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('Should display online banking content', function() {
        cy.get('#onlineBankingMenu').as('Link_OnlineBanking')

        cy.get('@Link_OnlineBanking').click()

        // Getting the h1 selector using xpath
        cy.xpath('//h1').as('Title')
        cy.get('@Title').contains('Online Banking')

        cy.get('#online_banking_features').should('be.visible')
    })

    it('Should display feedback content', function() {
        cy.get('#feedback').as('Link_Feedback')

        cy.get('@Link_Feedback').click()
        cy.get('#feedback-title').should('be.visible')
    })

    it('Should navigate to homepage via logo', function() {
       cy.get('.brand').as('Logo')
       
       cy.get('@Logo').click()
       cy.url().should('include', 'index.html')
    })
})