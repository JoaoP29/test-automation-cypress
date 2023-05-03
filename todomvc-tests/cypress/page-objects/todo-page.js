export class TodoPage{
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }
    
    newTodo(inputText){
        cy.get('.new-todo').type(inputText + '{enter}')
    }

    validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }

    toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }

    showCompleted(){
        cy.contains('Completed').click()
    }

    showActive(){
        cy.contains('Active').click()
    }

    showAll(){
        cy.contains('All').click()
    }

    validateNumberOfShownTodos(expectedNumberOfTodos){
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }

    validateCompletedTodo(){
        
    }
}