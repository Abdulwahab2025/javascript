// ui.js
import { products, getProductName } from "./products.js";
import { getCart, getTotal } from "./cart.js";

const cartList = document.getElementById("cart-list");
const totalEl = document.getElementById("total");

export function renderCart() {
  cartList.innerHTML = ""; // clear cart list
  const cart = getCart();

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    totalEl.textContent = "0.00";
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${getProductName(item.productId)} - Quantity: ${
      item.quantity
    }`;
    cartList.appendChild(li);
  });

  totalEl.textContent = getTotal(products).toFixed(2);
}

export function attachProductButtons(onAddToCart) {
  document.querySelectorAll("#products button").forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-product-id"));
      onAddToCart(id);
    });
  });
}
