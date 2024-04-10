/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    const email = 'test@gmail.com'
    const password = 'test'

    cy.visit('https://elevator-tracker.vercel.app/signin')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'https://elevator-tracker.vercel.app/')
  })
  it('should ensure the existance of card states', () => {
    cy.get('.sidebar-list').should('have.length.at.least', 3)
  })

  it('should ensure the existance of cards with state "operational"', () => {
    cy.get('.sidebar-list > li')
      .eq(0)
      .click()
      .should('contain', 'Operational')
    cy.get('.main-container')
    cy.get('.main-cards').should('exist')
    cy.get('.card')
      .should('have.length.at.least', 6)
      .eq(0)
      .click()
    //Modal Dialog
    cy.get('.card-details-item').should('exist')
    cy.get('.charts').should('exist')
  })
  it('should ensure the existance of cards with state "warning"', () => {
    cy.get('.sidebar-list > li')
      .eq(1)
      .click()
      .should('contain', 'Warning')
    cy.get('.main-container')
    cy.get('.main-cards').should('exist')
    cy.get('.card')
      .should('have.length.at.least', 6)
      .eq(0)
      .click()
    //Modal Dialog
    cy.get('.card-details-item').should('exist')
  })
  it('should ensure the existance of cards with state "out-of-order"', () => {
    cy.get('.sidebar-list > li')
      .eq(2)
      .click()
      .should('contain', 'Out of order')
    cy.get('.main-container')
    cy.get('.main-cards').should('exist')
    cy.get('.card')
      .should('have.length.at.least', 6)
      .eq(0)
      .click()
    //Modal Dialog
    cy.get('.card-details-item').should('exist')
  })
})
