//? All Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../src/App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import TodoProvider from "./Context/TodoContext";
import CartProvider from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CartProvider>
          <TodoProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </TodoProvider>
        </CartProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
