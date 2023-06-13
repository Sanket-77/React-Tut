import React from "react";
import { useState } from "react";

function Tut23_UseState() {
  const [items, setItems] = useState([]);

  const AddItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      {console.log(items)}
      <button onClick={AddItem}>Add Item</button>
      <ul>
        {items.map((item) => {
          <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}
export default Tut23_UseState;
