//? All Imports
import React, { useEffect, useState } from "react";
import useCustomToast from "../hooks/useCustomToast";
import axios from "axios";
import API_URL from "../config/config";

export const TodoContext = React.createContext();
// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const showToast = useCustomToast();

  // Function : to get all todos
  const getTodos = async () => {
    try {
      const todos = await axios.get(`${API_URL}/todo`);
      setTodos(todos.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect: To get all todos on first render
  useEffect(() => {
    getTodos();
  }, []);

  // Handler : To handle input changes
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Handler : To handle Add Todo
  const handleAddTodo = async () => {
    try {
      if (newTodo.trim() == "") {
        showToast("Todo can't be empty", "error");
        return;
      }
      const response = await axios.post(`${API_URL}/todo/create`, {
        title: newTodo,
      });
      showToast(response.data.message, "success");
      getTodos();
      setNewTodo("");
    } catch (error) {
      console.log(error);
    }
  };

  // Handler : To handle todo completion status change
  const handleToggleComplete = async (id) => {
    try {
      await axios.put(`${API_URL}/todo/update/${id}`);
      getTodos();
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  // Handler : To handle todo deletion
  const handleRemoveTodo = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/todo/delete/${id}`);
      showToast(response.data.message, "success");
      getTodos();
    } catch (error) {
      showToast(error.message);
    }
  };

  // Function : Get the number of tasks
  const getTaskCount = () => {
    return todos.length;
  };

  //  Function : Get the number of completed tasks
  const getCompletedTaskCount = () => {
    return todos.filter((todo) => todo.isCompleted).length;
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
