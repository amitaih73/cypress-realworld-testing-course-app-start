describe("User Jouney", () => {
    it("user can find a curse on the page and complete all the curses", () => {
        cy.visit("http://localhost:3000")
        cy.getByData("course-0").find("a").contains("Get started").click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq",
         "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq",
        "/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq", "/")
    })

    it.only("user can find a curse -1 on the page and complete all the curses", () => {
        cy.visit("http://localhost:3000")
        cy.getByData("course-1").find("a").contains("Get started").click()
        cy.location("pathname").should("eq", "/testing-foundations")
        // cy.getByData("next-lesson-button").click()
        // cy.location("pathname").should("eq", "/testing-your-first-application")
        // cy.getByData("challenge-answer-0").click()
        // cy.getByData("next-lesson-button").click()
        // cy.location("pathname").should("eq",
        //  "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        // cy.getByData("challenge-answer-0").click()
        // cy.getByData("next-lesson-button").click()
        // cy.location("pathname").should("eq",
        // "/testing-your-first-application/setting-up-data-before-each-test")
        // cy.getByData("challenge-answer-0").click()
        // cy.getByData("next-lesson-button").click()
        // cy.location("pathname").should("eq", "/")
    })
})   