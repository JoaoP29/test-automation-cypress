/// <reference types = "cypress"/>

describe('todo test suite', () => {
    it('should navigate to the TodoMVC App', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    })
    
    it('should add a new todo', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('new todo{enter}')
    })
})