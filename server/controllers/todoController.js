const todoModel = require("../models/Todo.model");
const createError = require("../utils/createError");

const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      return next(createError(404, "Title not found"));
    }

    const todo = new todoModel(req.body);
    await todo.save();
    res
      .status(201)
      .json({ success: true, message: "Todo created successfully", todo });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const updateTodoStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findById(id);
    todo.isCompleted = !todo.isCompleted;
    await todo.save();
    res.json({ success: true, message: "Todo updated successfully", todo });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findById(id);
    if (!todo) {
      return next(createError(400, "Todo not found"));
    }

    await todoModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    return next(createError(400, error.message));
  }
};

const getTodos = async (req, res, next) => {
  try {
    const todos = await todoModel.find({});
    res.json({ success: true, message: "Todos retrieved successfully", todos });
  } catch (error) {
    return next(createError(400, error.message));
  }
};

module.exports = {
  createTodo,
  updateTodoStatus,
  deleteTodo,
  getTodos,
};
