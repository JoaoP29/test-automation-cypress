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
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.newTodo('Create portfolio')
        todoPage.newTodo('Commit it')
        todoPage.newTodo('Push it')
    })

    it('should mark two todos as completed', () => {
        todoPage.toggleTodo(2)
        todoPage.toggleTodo(1)
        todoPage.validateToggleState(2, true)
        todoPage.validateToggleState(1, true)
        todoPage.validateTodoCompletedState(2, true)
        todoPage.validateTodoCompletedState(1, true)
    })

    it('should show completed todos in their list', () => {
        todoPage.toggleTodo(2)
        todoPage.toggleTodo(1)
        todoPage.showCompleted()
        todoPage.validateNumberOfShownTodos(2)
    })

    it('should show active todo in its list', () => {
        todoPage.toggleTodo(2)
        todoPage.toggleTodo(1)
        todoPage.showActive()
        todoPage.validateNumberOfShownTodos(1)
    })

    it('should show all todos', () => {
        todoPage.showCompleted()
        todoPage.showAll()
        todoPage.validateNumberOfShownTodos(3)
    })

    it('should clear completed', () => {
        todoPage.toggleTodo(2)
        todoPage.toggleTodo(1)
        todoPage.clearCompletedTodo()
        todoPage.validateNumberOfShownTodos(1)
    })
})