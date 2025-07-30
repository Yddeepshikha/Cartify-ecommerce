// export const getCart = () => {
//   const cart = localStorage.getItem("cart");
//   return cart ? JSON.parse(cart) : [];
// };

// export const addToCart = (product) => {
//   const cart = getCart();
//   const existingItem = cart.find((item) => item.id === product.id);
//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
// };
export const getCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product) => {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productId) => {
  const cart = getCart().filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateQuantity = (productId, amount) => {
  const cart = getCart().map((item) => {
    if (item.id === productId) {
      return { ...item, quantity: Math.max(1, item.quantity + amount) };
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
};
