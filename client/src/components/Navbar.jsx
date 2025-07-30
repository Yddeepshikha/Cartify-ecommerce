import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#000", padding: "1rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
      <Link to="/" style={{ color: "hotpink", fontWeight: "bold", textDecoration: "none" }}>Cartify</Link>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart</Link>
      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>

    </nav>
  );
}

export default Navbar;
