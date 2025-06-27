import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const foodItems = [
    { id: 1, name: "Pizza", price: 9.99 },
    { id: 2, name: "Burger", price: 5.99 },
    { id: 3, name: "Pasta", price: 7.99 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Food Delivery App</h1>
      <div>
        {foodItems.map(item => (
          <div key={item.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
