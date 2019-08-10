describe('Functional tests for itera website', () => {
    it('Should type Name, Mobile number, Email address, Password and address in the input box', function() {
        // Visits the URL
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        // Types your name in the box 
        cy.get('#name').type('David')
        // Types your phone number in the box
        cy.get('#phone').type('0423888999')
        // Types your email address in the box
        cy.get('#email').type('test@test.com')
        // Types your password in the box
        cy.get('#password').type('Password')
        // Types your address in the box
        cy.get('#address').type('10 Lazy Street Camden NSW 2570')
        // Clicks the submit button
        cy.get('.btn-primary').click()
    })

    it('Select Gender and check the checkboxs for the days that work best', function() {
       // Selects the Male checkbox
       cy.get('#male').click()
       // Select the Tuesday checkbox
       cy.get('#tuesday').click()
       // Select the Friday checkbox
       cy.get('#friday').click() 
    })

    it('Select Norway as the country to travel to', function() {
        // Clicks on the dropdown box
        cy.get('.form-group').click({multiple: true})
        // Selects the Norway option
        cy.get('.custom-select').select('Norway')
        cy.get('.custom-select').contains('Norway')
    })
})