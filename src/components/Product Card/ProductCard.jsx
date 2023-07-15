/* eslint-disable react/prop-types */
import { FaCartPlus } from "react-icons/fa";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { title, price, image, rating } = product;

  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={image} alt={title} />
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productPrice}>Price: {price}₹</p>
      <div className={styles.productRating}>
        <span className={styles.ratingValue}>{rating.rate}</span>
        <span className={styles.ratingCount}>({rating.count} reviews)</span>
      </div>
      <button className={styles.addToCartButton}>
        <FaCartPlus className={styles.cartIcon} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
