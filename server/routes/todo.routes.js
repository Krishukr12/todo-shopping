// All imports
const { Router } = require("express");
const {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} = require("../controllers/todoController");

const todoRouter = Router();

//Create Todo
todoRouter.post("/create", createTodo);

// Update Todo
todoRouter.put("/update", updateTodo);

// Delete Todo
todoRouter.delete("/delete", deleteTodo);

// Get Todos
todoRouter.get("/", getTodos);

module.exports = todoRouter;
