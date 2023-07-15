/* eslint-disable react/prop-types */
import styles from "./CartIcon.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartIcon = ({ itemCount }) => {
  return (
    <div className={styles.cart}>
      <span className={styles.count}>{itemCount}</span>
      <i className={styles.material_icons}>
        <AiOutlineShoppingCart />
      </i>
    </div>
  );
};

export default CartIcon;
