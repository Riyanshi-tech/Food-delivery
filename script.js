const foodItems = [
  {
    name: "Pizza",
    price: 9.99,
    image:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
  },
  {
    name: "Burger",
    price: 5.99,
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
  },
  {
    name: "Pasta",
    price: 7.99,
    image:
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
  },
];

const cart = [];

const foodContainer = document.getElementById("food-items");
const cartContainer = document.getElementById("cart-items");

foodItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "food-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="food-img" />
    <h3>${item.name}</h3>
    <p>Price: ₹${item.price.toFixed(2)}</p>
    <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
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
    div.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
    cartContainer.appendChild(div);
  });
}
