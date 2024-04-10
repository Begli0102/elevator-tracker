/// <reference types="cypress" />

describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('https://elevator-tracker.vercel.app/signup')
  })

  it('displays the registration form', () => {
    cy.contains('Sign up').should('exist')
    cy.get('input[name="name"]').should('exist')
    cy.get('input[name="surname"]').should('exist')
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.contains('Sign up').should('exist')
    cy.contains('Already have an account?').should('exist')
  })

  it('successfully registers a new user', () => {
    cy.get('input[name="name"]').type('test')
    cy.get('input[name="surname"]').type('test')
    cy.get('input[name="email"]').type('test@gmail.com')
    cy.get('input[name="password"]').type('test')
    cy.get('button[type="submit"]').click()
  })

  it('displays error message for incomplete form submission', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('Please fill in all fields').should('exist')
  })

  it('if a user has an account then go to login page directly', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('Please fill in all fields').should('exist')
  })
  it('redirects to login page when already have an account is clicked', () => {
    // Click on "Already have an account?" link without filling out any fields
    cy.get("span")
    cy.contains('Already have an account?').click()

    // Confirm redirection to the login page
    cy.url().should('eq', 'https://elevator-tracker.vercel.app/signin')
  })
})
