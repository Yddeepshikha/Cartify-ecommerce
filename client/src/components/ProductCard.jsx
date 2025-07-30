import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/cartUtils";

const ProductCard = ({ product }) => {
  const discount = Math.floor(Math.random() * 20) + 10;
  const rating = (Math.random() * 2 + 3).toFixed(1);
  const cleanedId = product.id.replace(/^\/?works\//, "");

  const handleAddToCart = () => {
    addToCart(product);
    alert("Added to cart!");
  };

  return (
    <div className="w-[150px] sm:w-[180px] bg-white p-3 rounded shadow hover:shadow-lg transform transition duration-300 hover:scale-105 flex flex-col h-full justify-between">
      <Link
        to={`/product/${cleanedId}`}
        state={{ product }}
        className="no-underline"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-[200px] object-cover rounded mb-2"
        />

        {/* ✅ Black title and author text */}
        <h3 className="text-sm font-semibold line-clamp-2 text-black">
          {product.name}
        </h3>
        <p className="text-xs text-gray-700">{product.author}</p>

        <div className="flex items-center text-sm mt-1 flex-wrap gap-1">
          <span className="text-yellow-600 font-semibold">{rating} ⭐</span>
          <span className="text-green-600 font-bold">₹{product.price}</span>
          <span className="text-gray-500 line-through text-xs">
            ₹{Math.floor(product.price * (100 + discount) / 100)}
          </span>
          <span className="text-red-500 text-xs font-semibold">
            ({discount}% off)
          </span>
        </div>
      </Link>

      {/* ✅ Button always aligned bottom */}
      <div className="mt-3">
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white text-sm py-1 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
