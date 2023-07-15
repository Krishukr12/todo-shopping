import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Todo.module.css";
import { TodoContext } from "../../Context/TodoContext";

const Todo = () => {
  const {
    todos,
    newTodo,
    handleInputChange,
    handleAddTodo,
    handleToggleComplete,
    handleRemoveTodo,
    getTaskCount,
    getCompletedTaskCount,
  } = useContext(TodoContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.stats}>
        <p>Total Tasks: {getTaskCount()}</p>
        <p>Completed Tasks: {getCompletedTaskCount()}</p>
      </div>
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
        {/* All todos list */}
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`${styles.todo} ${
              todo.completed ? styles.completed : ""
            }`}
          >
            <span className={styles.text}>{todo.text}</span>
            <div>
              {/* Checkbox to toggle completion status */}
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
              />
              {/* Button to remove todo */}
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
