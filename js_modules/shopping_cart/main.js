// main.js
import { products, getProductName } from "./products.js";
import { addToCart, getCart, getTotal } from "./cart.js";

// Add some products to cart
addToCart(1, 3); // 3 Apples
addToCart(2, 2); // 2 Bananas

// Show cart contents
console.log("Cart contents:");
getCart().forEach((item) => {
  console.log(`${getProductName(item.productId)} - Quantity: ${item.quantity}`);
});

// Show total price
console.log("Total price: $" + getTotal(products).toFixed(2));
