/// <reference types = "cypress"/>

import { TodoPage } from "../../page-objects/todo-page";


describe('trying visual validation', () => {
    const todoPage = new TodoPage()
    
    before(() => todoPage.navigate())
    
    // This is not working yet :( MAY 4th 2023
    // UPDATE: I figured out I forgot to set env variables lol MAY 5th 2023
    beforeEach(() => cy.eyesOpen({appName: "Joao's portfolio TodoMVC", batchName: "Joao's portfolio TodoMVC batch"}))
    afterEach(() => cy.eyesClose())

    it('first try', () => {
        cy.eyesCheckWindow('Empty todo list')

        todoPage.newTodo('Create portfolio')
        todoPage.newTodo('Try visual validation')
        
        cy.eyesCheckWindow('Two todos list')
        
        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('One toggled todo list')
    })
})