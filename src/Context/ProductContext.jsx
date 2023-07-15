import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

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
    <ProductContext.Provider value={{ isLoading, products }}>
      {children}
    </ProductContext.Provider>
  );
};
