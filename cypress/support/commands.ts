/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})


Cypress.Commands.add("getByTarget", (selector) => {
    return cy.get(`[data-target="${selector}"]`);
})

Cypress.Commands.add("getByOnClick", (selector) => {
    return cy.get(`[onclick="${selector}"]`);
})