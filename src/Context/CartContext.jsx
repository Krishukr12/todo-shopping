import React, { useEffect, useState } from "react";
import useCustomToast from "../hooks/useCustomToast";

export const CartContext = React.createContext();
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const showToast = useCustomToast();
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Handler : To handle Add to Cart
  const handleAddToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (isProductInCart) {
      showToast("product already in cart", "error");
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      showToast("Product added successfully", "success");
    }
  };

  // Handler : To handle Delete from Cart
  const deleteFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    showToast("Product removed successfully", "warning");
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
