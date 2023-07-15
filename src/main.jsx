//? All Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../src/App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import TodoProvider from "./Context/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
