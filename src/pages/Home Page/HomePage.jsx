import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Todo-Shopping!</h1>
      <p className={styles.description}>
        The website is a user-friendly application that allows users to manage
        their to-do list and shopping cart. Users can add, delete, and toggle
        tasks in the to-do list. They can also add products to their cart and
        remove them. The website features a visually appealing design,
        responsive interface, and utilizes React components with hooks for
        efficient development. It incorporates state management, API
        integration, and routing for a seamless user experience
      </p>
      <Link to="/todolist">
        <button className={styles.button}>Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
