describe('Test Flow Login kasirAja', () => {
    it('Should open login page first', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('User can login using valid data', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("fares.tris@gmail.com")
      cy.get('#password').type("tokopedia123")
      cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
  
      // should be redirected to dashboard page /dashboard
      cy.url().should('include', '/dashboard')
  
      // should contains text "kasirAja"
      cy.contains("kasirAja")
    })

    it("User can't login using empty password", () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type("fares.tris@gmail.com")
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
    
        // should be redirected to dashboard page /login
        cy.url().should('include', '/login')
    
        // should display alert "password" is not allowed to be empty
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','"password" is not allowed to be empty')
      })
})

