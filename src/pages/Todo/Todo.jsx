import { useState } from "react";
import styles from "./Todo.module.css";
import { AiFillDelete } from "react-icons/ai";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.addTodo}>
        <input
          type="text"
          className={styles.input}
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo"
        />
        <button className={styles.addButton} onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <div className={styles.todoList}>
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`${styles.todo} ${
              todo.completed ? styles.completed : ""
            }`}
          >
            <span className={styles.text}>{todo.text}</span>
            <div>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
              />
              <button
                className={styles.removeButton}
                onClick={() => handleRemoveTodo(index)}
              >
                <AiFillDelete />
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
