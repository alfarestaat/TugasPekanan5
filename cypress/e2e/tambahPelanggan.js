describe('Test Flow Add Customer kasirAja', () => {
  it('Should open login page first', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should('include', '/login')
  })

  it('Input valid username dan password then Login', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type("fares.tris@gmail.com")
    cy.get('#password').type("tokopedia123")
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

    // Should be redirected to /dashboard
    cy.url().should('include', '/dashboard')
    cy.contains("kasirAja")
  })

  it('User can add customer with valid input', () => {
    cy.contains("pelanggan").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("add customer")
    cy.get('[id="no.hp"]').type("082112725015")
    cy.get('#alamat').type("bekasi")
    cy.get('#keterangan').type("tes customer")
    cy.contains("simpan").click()

    // Should be redirected to /customers
    cy.url().should('include', '/customers')
    
    cy.contains("success") //Expect memiliki kata 'success' setelah berhasil add customer
    cy.contains("item ditambahkan") //Expect memiliki kata 'item ditambahkan' setelah berhasil add customer
  })

  it("User can't add customer without input customer name", () => {
    cy.contains("pelanggan").click()
    cy.contains("tambah").click()
    cy.get('[id="no.hp"]').type("082154564214")
    cy.get('#alamat').type("bekasi")
    cy.get('#keterangan').type("tes fail customer")
    cy.contains("simpan").click()    

    // Should display error message "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
  })
})