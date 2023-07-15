// All imports
const { Router } = require("express");
const {
  createTodo,
  updateTodoStatus,
  deleteTodo,
  getTodos,
} = require("../controllers/todoController");

const todoRouter = Router();

//Create Todo
todoRouter.post("/create", createTodo);

// Update Todo
todoRouter.put("/update/:id", updateTodoStatus);

// Delete Todo
todoRouter.delete("/delete/:id", deleteTodo);

// Get Todos
todoRouter.get("/", getTodos);

module.exports = todoRouter;
