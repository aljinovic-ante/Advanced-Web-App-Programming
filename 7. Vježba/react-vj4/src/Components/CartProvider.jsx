import React, { createContext, useState, useContext } from "react";

export const CartContext=createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      let productAlreadyExists = prevCart.find(
        (item) => item.name === product.name
      );
      if (productAlreadyExists) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(productName) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function CartItems() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Košarica</h2>
      {cart.length === 0 ? (
        <p>Košarica je prazna.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - Količina: {item.quantity}, Cijena:{" "}
              {item.price}{" "}
              <button onClick={() => removeFromCart(item.name)}>-1</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
