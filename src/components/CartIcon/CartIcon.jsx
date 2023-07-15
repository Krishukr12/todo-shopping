/* eslint-disable react/prop-types */
//? All Imports
import styles from "./CartIcon.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = ({ itemCount }) => {
  return (
    <div className={styles.cart}>
      <span className={styles.count}>{itemCount}</span>
      <i className={styles.Icons}>
        <AiOutlineShoppingCart />
      </i>
    </div>
  );
};

export default CartIcon;
