import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

export default function CartItems() {
  const { cart, removeOneFromCart, removeAllFromCart, addOneToCart } =
    useContext(CartContext);

  return (
    <div>
      <h2>Košarica</h2>
      {cart.length === 0 ? (
        <p>Košarica je prazna.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item._id}>
              <strong>{item.name}</strong> - Količina: {item.quantity}, Cijena:{" "}
              {item.price}
              <button onClick={() => removeOneFromCart(item._id)}>-1</button>
              <> </>
              <button onClick={() => addOneToCart(item._id)}>+1</button>
              <> </>
              <button onClick={() => removeAllFromCart(item._id)}>
                Remove from cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}