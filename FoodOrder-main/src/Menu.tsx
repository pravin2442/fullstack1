import React from "react";
import { MenuItem } from "./App";

interface MenuProps {
  items: MenuItem[];
  onAdd: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ items, onAdd }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Menu</h2>
      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-3 rounded shadow">
           <div style={{ width: "150px", height: "150px", overflow: "hidden" }}>
  <img
    src={item.image}
    alt={item.name}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>



            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => onAdd(item)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
