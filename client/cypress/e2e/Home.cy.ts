/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signin')
  })

  it('successfully logs in an existing user', () => {
    // Assuming there is an existing user with known credentials
    const email = 'test@gmail.com'
    const password = 'test'

    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
