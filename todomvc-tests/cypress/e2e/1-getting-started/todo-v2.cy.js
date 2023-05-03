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
        todoPage.toggleTodo(0)
    })
})

/*describe('todo tests: filtering', () => {
    const todoPage = TodoPage()
})*/