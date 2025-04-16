import React from "react";
import { MenuItem } from "./App";

interface CartProps {
  cart: MenuItem[];
  onRemove: (index: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Cart</h2>
      <ul className="space-y-2">
        {cart.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center border-b pb-2">
            <span>{item.name}</span>
            <div className="flex items-center gap-2">
              <span>₹{item.price}</span>
              <button
                className="text-red-500"
                onClick={() => onRemove(idx)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold">Total: ₹{total}</div>
    </div>
  );
};

export default Cart;
