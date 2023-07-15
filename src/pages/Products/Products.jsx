//? : All Imports
import { useContext } from "react";
import { Spinner } from "@chakra-ui/react";
import { ProductContext } from "../../Context/ProductContext";

import ProductCard from "../../components/Product Card/ProductCard";
import styles from "./Products.module.css";

const Products = () => {
  const { isLoading, products } = useContext(ProductContext);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.spinnerContainer}>
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
