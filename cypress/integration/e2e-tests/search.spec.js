describe('Searchbox Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html') 
    })

    it('Should search for value via searchbox,', function() {
        cy.get('#searchTerm').as('Searchbox')

        cy.get('@Searchbox').type('bank {enter}')
        cy.url().should('include', 'search.html?searchTerm=bank')
    })

    it('Should display search results page', function() {
        cy.get('h2').as('Title')

        cy.get('@Title').contains('Search Results:')
    })

    it('Should display homepage again', function() {
        cy.go('back')
        cy.url().should('include', 'index.html')
    })
})