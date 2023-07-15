import { useEffect, useState } from "react";
import ProductCard from "../../components/Product Card/ProductCard";
import styles from "./Products.module.css";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setIsLoading(false);
      };
      fetchProducts();
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            height: "90vh",
            width: "410%",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />{" "}
        </div>
      ) : products.length > 0 ? (
        products.map((item, index) => {
          return <ProductCard key={index} product={item} />;
        })
      ) : null}
    </div>
  );
};

export default Products;
