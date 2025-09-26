// Sample product data
const products = [
  { id: 1, name: "Smartphone", price: 15000, image: "images/phone.jpg" },
  { id: 2, name: "Laptop", price: 55000, image: "images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 2000, image: "images/headphones.jpg" },
  { id: 4, name: "Smartwatch", price: 5000, image: "images/watch.jpg" }
];

let cart = [];

// Display products
function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update cart
function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });
  document.getElementById("cartTotal").innerText = total;
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Clear cart
function clearCart() {
  cart = [];
  updateCart();
}

// Show/Hide cart
function toggleCart() {
  document.getElementById("cartSection").classList.toggle("hidden");
}

// Run on load
displayProducts();