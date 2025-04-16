// App.tsx
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Mock API fetch (replace with real API if needed)
    fetch("/mock-menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item, idx) => idx !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Online Food Ordering</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Menu items={menu} onAdd={addToCart} />
        <Cart cart={cart} onRemove={removeFromCart} />
      </div>
    </div>
  );
};

export default App;
