/// <reference types="cypress" />

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://elevator-tracker.vercel.app/signin')
  })

  it('displays the login form', () => {
    cy.contains('Sign in').should('exist')
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.contains('Sign in').should('exist')
    cy.contains("Don't have an account?").should('exist')
  })

  it('successfully logs in an existing user', () => {
    // Assuming there is an existing user with known credentials
    const email = 'test@gmail.com'
    const password = 'test'

    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'https://elevator-tracker.vercel.app/')
  })
})
