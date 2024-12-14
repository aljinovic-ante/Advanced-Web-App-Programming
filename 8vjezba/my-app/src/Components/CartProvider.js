import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const productAlreadyExists = prevCart.find(
        (item) => item._id === product._id
      );
      if (productAlreadyExists) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  function removeOneFromCart(productId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function addOneToCart(productId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function removeAllFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        addOneToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
