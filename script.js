const foodItems = [
  { name: "Pizza", price: 9.99 },
  { name: "Burger", price: 5.99 },
  { name: "Pasta", price: 7.99 },
];

const cart = [];

const foodContainer = document.getElementById("food-items");
const cartContainer = document.getElementById("cart-items");

foodItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "food-card";
  card.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <button onclick='addToCart("${item.name}", ${item.price})'>Add to Cart</button>
    `;
  foodContainer.appendChild(card);
});

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  cartContainer.innerHTML = "";
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price}`;
    cartContainer.appendChild(div);
  });
}
