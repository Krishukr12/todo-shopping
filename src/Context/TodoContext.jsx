import React, { useState } from "react";

export const TodoContext = React.createContext();
// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Handler : To handle input changes
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Handler : To handle Add Todo
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // Handler : To handle todo completion
  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Handler : To handle todo deletion
  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        handleInputChange,
        handleAddTodo,
        handleToggleComplete,
        handleRemoveTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
