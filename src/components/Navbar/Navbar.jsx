import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import CartIcon from "../CartIcon/CartIcon";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const Navbar = () => {
  const { cart } = useContext(CartContext);
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
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About</Link>
      </div>

      {/* Cart Notification */}
      <div className={styles.cart_container}>
        <Link to="/cart">
          {" "}
          <CartIcon itemCount={cart.length} />
        </Link>
      </div>
    </div>
  );
};
