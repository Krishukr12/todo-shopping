//? All Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../src/App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import TodoProvider from "./Context/TodoContext";
import CartProvider from "./Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CartProvider>
          <TodoProvider>
            <App />
          </TodoProvider>
        </CartProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
