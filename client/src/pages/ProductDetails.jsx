import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-600">
        Product not found. Try navigating from the{" "}
        <Link to="/" className="text-blue-600 underline">homepage</Link>.
      </div>
    );
  }

  const discount = Math.floor(Math.random() * 20) + 10;
  const rating = (Math.random() * 2 + 3).toFixed(1);
  const originalPrice = Math.floor(product.price * (100 + discount) / 100);

  const handleAddToCart = () => {
    alert("✅ Book added to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      <div className="flex justify-center items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-[240px] h-[340px] object-cover rounded shadow"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">{product.name || "Untitled"}</h1>
        <p className="text-sm text-gray-500">by <span className="italic">{product.author || "Unknown"}</span></p>

        <div className="flex items-center gap-4 text-lg">
          <span className="text-green-600 font-bold">₹{product.price}</span>
          <span className="line-through text-gray-400">₹{originalPrice}</span>
          <span className="text-red-500 font-semibold">({discount}% OFF)</span>
        </div>

        <div className="text-yellow-600 font-medium text-sm">⭐ {rating} / 5 Rating</div>

        <button
          onClick={handleAddToCart}
          className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
        >
          Add to Cart
        </button>

        <div className="pt-4">
          <h3 className="text-md font-semibold mb-1">📖 Description:</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            This is a sample book titled <strong>{product.name || "Untitled"}</strong> authored by <strong>{product.author || "Anonymous"}</strong>. It's ideal for readers who enjoy engaging and informative content. You can add further details like edition, publisher, language, and page count later.
          </p>
        </div>

        {/* <Link to="/" className="inline-block mt-4 text-blue-600 text-sm underline">← Back to Home</Link> */}
        <Link to="/" className="inline-block mt-4 text-black text-sm no-underline hover:underline hover:text-blue-600 transition">
  ← Back to Home
</Link>

      </div>
    </div>
  );
};

export default ProductDetails;
