import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
// import CloseIcon from "@material-ui/icons/Close";
import styles from "./Cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, deleteFromCart } = useContext(CartContext);

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Shopping Cart</h1>
      {cart.length === 0 ? (
        <>
          <p className={styles.emptyCart}>Your cart is empty.</p>
          <Link to="/products">
            <button className={styles.checkoutButton}>Shop Now</button>
          </Link>
        </>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div className={styles.product} key={index}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h2 className={styles.productName}>{item.title}</h2>
                <p className={styles.productPrice}>Price : {item.price} ₹</p>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => deleteFromCart(item.id)}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          ))}
          <div className={styles.product}>
            <div className={styles.productDetails}>
              <div>
                <span className={styles.boldText}>Total Items:</span>{" "}
                <span className={styles.blueBadge}>{cart.length}</span>
              </div>
              <div>
                <span className={styles.boldText}>Subtotal:</span> {cartTotal} ₹
              </div>
            </div>
          </div>
        </div>
      )}
      {cart.length !== 0 ? (
        <button className={styles.checkoutButton}>Checkout</button>
      ) : null}
    </div>
  );
};

export default Cart;
