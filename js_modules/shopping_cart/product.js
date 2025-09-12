// products.js
export const products = [
  { id: 1, name: "Apple", price: 0.5 },
  { id: 2, name: "Banana", price: 0.3 },
  { id: 3, name: "Orange", price: 0.7 },
];

export function getProductName(id) {
  const product = products.find((p) => p.id === id);
  return product ? product.name : "Unknown product";
}
