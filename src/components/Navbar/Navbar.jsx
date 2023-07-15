import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import CartIcon from "../CartIcon/CartIcon";

export const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      {/* Logo container */}
      <div className={classes.logo_container}>
        <Link to="/">Todo-Shopping</Link>
      </div>

      {/* Navigation links */}
      <div className={classes.link_container}>
        <Link to="/todolist">TodoList</Link>
        <Link to="/products">Products</Link>
      </div>

      {/* Cart Notification */}
      <div className={classes.cart_container}>
        <Link to="/cart">
          {" "}
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};
