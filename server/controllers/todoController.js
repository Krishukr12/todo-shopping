const createTodo = (req, res, next) => {
  res.send("create todo");
};

const updateTodo = (req, res, next) => {
  res.send("updateTodo");
};

const deleteTodo = (req, res, next) => {
  res.send("deleteTodo");
};

const getTodos = (req, res, next) => {
  res.send("getTodos");
};

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodos,
};
