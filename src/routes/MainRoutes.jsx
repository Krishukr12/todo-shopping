import { Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo/Todo";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import ContactPage from "../pages/Contact/Contact";
import About from "../pages/About/About";
import HomePage from "../pages/Home Page/HomePage";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/todolist" element={<Todo />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};
