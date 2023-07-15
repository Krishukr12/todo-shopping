//? All Imports
import React, { useState } from "react";
import useCustomToast from "../hooks/useCustomToast";

export const TodoContext = React.createContext();
// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const showToast = useCustomToast();

  // Handler : To handle input changes
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Handler : To handle Add Todo
  const handleAddTodo = () => {
    if (newTodo.trim() == "") {
      showToast("Todo can't be empty", "error");
      return;
    }
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  // Handler : To handle todo completion status change
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
    showToast("Todo successfully Removed", "success");
  };

  // Function : Get the number of tasks
  const getTaskCount = () => {
    return todos.length;
  };

  //  Function : Get the number of completed tasks
  const getCompletedTaskCount = () => {
    return todos.filter((todo) => todo.completed).length;
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
        getTaskCount,
        getCompletedTaskCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
