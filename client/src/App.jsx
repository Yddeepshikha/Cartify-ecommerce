import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";






function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} /> {/* ✅ Moved inside */}
        <Route path="/signup" element={<Signup />} />
       <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
