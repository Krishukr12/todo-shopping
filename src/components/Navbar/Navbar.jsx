import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import CartIcon from "../CartIcon/CartIcon";

export const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      {/* Logo container */}
      <div className={styles.logo_container}>
        <Link to="/">Todo-Shopping</Link>
      </div>

      {/* Navigation links */}
      <div className={styles.link_container}>
        <Link to="/todolist">TodoList</Link>
        <Link to="/products">Products</Link>
      </div>

      {/* Cart Notification */}
      <div className={styles.cart_container}>
        <Link to="/cart">
          {" "}
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};
