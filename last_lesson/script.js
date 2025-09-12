let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(name, price) {
  const item = cart.find((p) => p.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  saveCart();
  renderCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Render cart items
function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name} (x${item.qty})</span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    `;
    cartDiv.appendChild(div);
  });

  document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}

// Clear the cart
function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

// Load cart when page opens
renderCart();
