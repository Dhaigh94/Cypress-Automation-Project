describe('Assertions', () => {
    it('tips and ideas', () => {
        // Retry until we find 3 matching selected lists
        cy.get('li.selected').should('have.length', 5)

        // Retry until input does not have class disabled
        cy.get('form')
        .find('input')
        .should('not.have.class', 'disabled')

        // Retry until textarea has the correct value
        cy.get('textarea').should('have.value', 'Placeholder..')

        // Retry until span does not contain "click me"
        cy.get('a')
        .parent('span')
        .should('not.contain', 'click me')

        // Retry until button is visible
        cy.get('button').should('be.visible')

        // Retry until loading spinner no longer exist
        cy.get('#spinner').should('not.exist')
    })
})