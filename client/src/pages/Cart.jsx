import React, { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  updateQuantity,
} from "../utils/cartUtils";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(getCart());
  };

  const handleUpdate = (id, amount) => {
    updateQuantity(id, amount);
    setCartItems(getCart());
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 mb-3 bg-white shadow rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.author}</p>
                <p className="text-green-600 font-bold">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleUpdate(item.id, -1)}
                className="bg-gray-200 px-2 rounded"
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleUpdate(item.id, 1)}
                className="bg-gray-200 px-2 rounded"
              >
                +
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 text-sm ml-4"
              >
                🗑 Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
