// cart.js
let cart = [];

export function addToCart(productId, quantity = 1) {
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
}

export function getCart() {
  return cart;
}

export function getTotal(products) {
  return cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    return total + product.price * item.quantity;
  }, 0);
}
