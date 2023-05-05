/// <reference types = "cypress"/>

describe('todo tests: actions', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('Create my portfolio{enter}')
      })
    
    it('should add a new todo', () => {
        cy.get('label').should('have.text', 'Create my portfolio')
        cy.get('.toggle').should('not.be.checked')
    })

    it('should mark todo as completed', () => {
        cy.get('label').should('have.text', 'Create my portfolio')
        cy.get('.toggle').click()
        cy.get('.toggle').should('be.checked')
        cy.get(':nth-child(3) > a').click()
        cy.get('label').should('have.text', 'Create my portfolio')
        cy.get('.toggle').should('be.checked')
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })

    it('should clear completed', () => {
        cy.get('label').should('have.text', 'Create my portfolio')
        cy.get('.toggle').click()
        cy.get('.toggle').should('be.checked')
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
        cy.get('.clear-completed').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
})

describe('todo tests filtering', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('Create my portfolio{enter}')
        cy.get('.new-todo').type('Commit it{enter}')
        cy.get('.new-todo').type('Push it{enter}')
        cy.get('.todo-list li:nth-child(3) .toggle').click()
    })

    it('should filter active todos', () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })

    it('should filter completed todos', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filter all todos', () => {
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })
})