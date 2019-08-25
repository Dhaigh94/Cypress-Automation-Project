describe('My first visual regression test', () => {
    before(function() {
        cy.visit('https://example.com')
    })

    it('Should load homepage', function() {
        cy.url().should('include', 'example.com')
    })

    it('Should make page snapshot', function() {
        cy.matchImageSnapshot()
    })
})