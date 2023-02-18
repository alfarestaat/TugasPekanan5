describe('Test Login kasirAja', () => {
    it('should open login page first', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('success login using valid credential', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("fares.tris@gmail.com")
      cy.get('#password').type("tokopedia123")
      cy.contains("login").click()
  
      // should be redirected to dashboard page /dashboard
      cy.url().should('include', '/dashboard')
  
      // should contains text "kasirAja"
      cy.contains("kasirAja")
    })
})