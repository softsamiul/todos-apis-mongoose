const express = require("express")
const todo_controller = require("../controllers/todo.controller")

const todoRouter = express.Router()

todoRouter.get("/", todo_controller.getAllTodos)
todoRouter.get("/:id", todo_controller.getSingleTodos)
todoRouter.put("/:id", todo_controller.updateTodo)
todoRouter.post("/create-todo", todo_controller.createTodo)
todoRouter.delete("/delete-todo/:id", todo_controller.deleteTodo )

module.exports = todoRouter