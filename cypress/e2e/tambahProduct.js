describe('Test Flow Add Product', () => {
    it('Should open login page first', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('Input valid username dan password then Login', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("fares.tris@gmail.com")
      cy.get('#password').type("tokopedia123")
      cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
  
      // Should be redirected to dashboard page /dashboard
      cy.url().should('include', '/dashboard')
  
      // Should contains text "kasirAja"
      cy.contains("kasirAja")
    })

    it('User can add product', () => {
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div').click()
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.get('#nama').type("Test Berhasil add Product")
        cy.get('#deskripsi').type("Desk Berhasil add Product")
        cy.get('[id="harga beli"]').type("5000")
        cy.get('[id="harga jual"]').type("7000")
        cy.get('#stok').clear().type("5")
        cy.get('#kategori').click()
        cy.wait(2000)
        cy.get('.css-u3dlpe').click()
        cy.wait(2000)
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
  
    
        // should be redirected to products page /products
        cy.url().should('include', '/products')
    
        cy.contains("success") //Expect memiliki kata 'success' setelah berhasil add product
        cy.contains("item ditambahkan") //Expect memiliki kata 'item ditambahkan' setelah berhasil add product
      })

      it("User can't add product because 'price' must be greater than ref:cost", () => {
        cy.window().then(win => { //Fungsi untuk scroll
            win.scrollTo(0, 0) // scroll ke paling atas window browser
          })
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.get('#nama').type("Test Gagal add Product")
        cy.get('#deskripsi').type("Desk Gagal add Product")
        cy.get('[id="harga beli"]').type("5000")
        cy.get('[id="harga jual"]').type("2000")
        cy.get('#stok').clear().type("5")
        cy.get('#kategori').click()
        cy.wait(2000)
        cy.get('.css-u3dlpe').click()
        cy.wait(2000)
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
        cy.window().then(win => { //Fungsi untuk scroll
            win.scrollTo(0, 0) // scroll ke paling atas window browser
          })
        cy.wait(5000)
  
    
        // Should still on create page /create
        cy.url().should('include', '/create')
    
        // Should display error message "password" is not allowed to be empty
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"price" must be greater than ref:cost')
      })
})

