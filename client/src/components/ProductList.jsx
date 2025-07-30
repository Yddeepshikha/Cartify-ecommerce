import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // For now, dummy products — can replace with backend API later
    const dummyProducts = [
      {
        id: 1,
        name: "DSA Book",
        price: 250,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 2,
        name: "Cute Bookmark Set",
        price: 60,
        image: "https://via.placeholder.com/150"
      }
    ];

    setProducts(dummyProducts);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", padding: "2rem" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem", width: "200px", borderRadius: "8px", background: "#fff" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%" }} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
