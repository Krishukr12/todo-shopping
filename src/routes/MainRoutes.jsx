import { Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo/Todo";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/todolist" element={<Todo />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};
