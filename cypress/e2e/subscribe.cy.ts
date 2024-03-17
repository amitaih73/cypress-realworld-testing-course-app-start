describe("Newsletter Susbribe FOrms", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    

        it("allows useres to subscribe to the email list", () => {
            cy.getByData("email-input").type("tom@aol.com")
            cy.getByData("submit-button").click()
            cy.getByData("success-message").should("exist").contains("tom@aol.com")
        })

        it("does NOT allow invalid email", () => {
            cy.getByData("email-input").type("invalidemail")
            cy.getByData("submit-button").click()
            cy.getByData("success-message").should("not.exist")
        })

        it.only("does NOT allow subscribe twise", () => {
            cy.getByData("email-input").type("john@example.com")
            cy.getByData("submit-button").click()
            cy.getByData("server-error-message").should("exist").contains(
                " john@example.com already exists. Please use a different email address.")
        })
})
