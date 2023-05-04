/// <reference types = "cypress" />

import { TodoPage } from "../../page-objects/todo-page"

describe('todo tests: actions', () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.newTodo('Create portfolio')
    })

    it('should add new todo', () => {
        todoPage.validateTodoText(0, 'Create portfolio')
    })

    it('should mark todo as completed', () => {
        todoPage.toggleTodo(0)
        todoPage.validateToggleState(0, true)
        todoPage.validateTodoCompletedState(0, true)
    })

    it('should clear all completed todos', () => {
        todoPage.toggleTodo(0)
        todoPage.showCompleted()
        todoPage.validateNumberOfShownTodos(1)
        todoPage.clearCompletedTodo()
        todoPage.validateNumberOfShownTodos(0)
    })
})

describe('todo tests: filtering', () => {
    const todoPage = TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.newTodo('Create portfolio')
        todoPage.newTodo('Commit it')
        todoPage.newTodo('Push it')
    })
})