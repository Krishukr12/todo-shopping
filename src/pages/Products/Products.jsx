import { useEffect, useState } from "react";
import ProductCard from "../../components/Product Card/ProductCard";
import styles from "./Products.module.css";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {products.length > 0
        ? products.map((item, index) => {
            return <ProductCard key={index} product={item} />;
          })
        : null}
    </div>
  );
};

export default Products;
